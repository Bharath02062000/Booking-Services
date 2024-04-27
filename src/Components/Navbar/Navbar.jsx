import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
 import menuicon from '../../assets/menuicon.png'
import { logout } from '../../firebase';

const Navbar = ({ isAuthenticated, username, userProfileImage }) => {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState("nav-home");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 650 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}
  const handleLogoutClick = async () => {
    try {
      await logout();
      // Redirect to home after logout
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo'>
        <img src={logo} alt=""/>
      </div>
      <ul className={mobileMenu?'': 'nav-menu'}>
        <li onClick={() => setMenu("nav-home")} className={menu === "nav-home" ? "active" : ""}><Link to="/">Home</Link></li>
        <li onClick={() => setMenu("nav-about")} className={menu === 'nav-about' ? "active" : ""}><Link to="/about">About</Link></li>
        <li onClick={() => setMenu("nav-contact")} className={menu === 'nav-contact' ? "active" : ""}><Link to="/contact">Contact</Link></li>
        <li onClick={() => setMenu("nav-carcart")} className={menu === 'nav-carcart' ? "active" : ""}><Link to="/cards">Bookings</Link></li>
        {isAuthenticated ? (
          <li className="nav-profile">
            <img
              src={userProfileImage}
              alt="Profile"
              className="profile-icon"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
              <ul className="profile-menu">
                {/* <li><Link to="/profile">Profile</Link></li> */}
                <li><button onClick={handleLogoutClick}>Logout</button></li>
              </ul>
            )}
          </li>
        ) : (
          <li className='nav-login'><Link to="/authform"> Login</Link></li>
        )}
      </ul>
      <img src={menuicon} alt='' className='menuicon' onClick={toggleMenu}/>
    
    </div>
  );
}

export default Navbar;
