import React, { useState } from 'react';
import './AuthForm.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(isLogin);
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setDisplayName(user.displayName || 'User');
      navigate('/welcome', { state: { displayName: user.displayName || 'User' } });
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLoginMode) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setDisplayName(user.displayName || 'User');
        navigate('/welcome', { state: { displayName: user.displayName || 'User' } });
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateDisplayName(user);
        navigate('/welcome', { state: { displayName: username } });
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const updateDisplayName = async (user) => {
    try {
      await updateProfile(user, { displayName: username });
      setDisplayName(username);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent. Check your inbox.');
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        setError('Email is already in use.');
        break;
      case 'auth/invalid-credential':
        setError('Invalid credentials. Please try again.');
        break;
      case 'auth/user-not-found':
        setError('User not found. Please check your email and try again.');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password. Please try again.');
        break;
      default:
        setError('An error occurred. Please try again.');
    }
    console.error('Authentication error:', error);
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
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
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ paddingRight: '30px' }} // Space for the icon
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
        </form>
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
