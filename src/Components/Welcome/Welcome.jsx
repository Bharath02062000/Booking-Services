import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Welcome.css';
import logo from "../../assets/logo.png"

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { displayName } = location.state || { displayName: 'User' };

  return (
    <div className="welcome-overlay">
      <div className="welcome-container">
        <img src={logo} alt="Logo" className="welcome-logo" />
        <h1>Welcome to Vehk, {displayName}!</h1>
        <p>We are glad to have you here!</p>
        <button onClick={() => navigate('/')}>Continue</button>
      </div>
    </div>
  );
};

export default Welcome;
