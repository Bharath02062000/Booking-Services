import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <AuthForm isLogin={true} />
    </div>
  );
};

export default Login;
