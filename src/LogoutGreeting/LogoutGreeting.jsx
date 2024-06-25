import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LogoutGreeting.css';
import logo from '../assets/logo.png';

const LogoutGreeting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { displayName } = location.state || { displayName: 'User' };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-greeting">
      <div className="logout-container">
        <img src={logo} alt="Logo" className="logout-logo" />
        <h1> Thank you for visiting our Vehk, {displayName}!</h1>
        <p>We hope to see you again soon!</p>
      </div>
    </div>
  );
};

export default LogoutGreeting;
