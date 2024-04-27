import React from 'react';
import './Signup.css';
import AuthForm from '../AuthForm/AuthForm';

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <AuthForm isLogin={false} />
    </div>
  );
};

export default Signup;
