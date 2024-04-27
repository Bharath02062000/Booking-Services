import React, { useState } from 'react';
import './AuthForm.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, updateProfile } from 'firebase/auth'; // Import updateProfile
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(isLogin); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Authentication error:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      if (isLoginMode) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setDisplayName(user.displayName);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateDisplayName(user); // Update display name after user creation
      }
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      if (error.code === 'email-already-in-use') {
        setError('Email is already in use.');
      } else {
        setError(error.message);
      }
      console.error( error.message);
    }
  };

  const updateDisplayName = async (user) => {
    try {
      await updateProfile(user, { displayName: username }); // Use updateProfile from firebase/auth
      setDisplayName(username);
    } catch (error) {
      setError(error.message);
      console.error('Update display name error:', error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent. Check your inbox.');
    } catch (error) {
      setError(error.message);
      console.error('Password reset error:', error.message);
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="auth-overlay">
      <div className={`auth-container ${isAuthenticated ? 'disabled' : ''}`}>
        <span className="close-button" onClick={() => navigate('/')}>×</span>
        <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={!isLoginMode}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
        </form>
        {isLoginMode && isAuthenticated && <p>Welcome to Vehk, {displayName}!</p>}
        <button onClick={handleGoogleSignIn} className="google-signin-button">
          {isLoginMode ? 'Sign in with Google' : 'Sign up with Google'}
        </button>
        <p>{isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <span className="auth-toggle" onClick={toggleMode}>
            {isLoginMode ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        {isLoginMode && (
          <p>
            <span className="auth-toggle" onClick={handleForgotPassword}>Forgot password?</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
