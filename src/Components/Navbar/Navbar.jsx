import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menuicon from '../../assets/menuicon.png';
import { logout } from '../../firebase';
import proficon from '../../assets/proficon.png';
import cartIcon from '../../assets/cartIcon.png';
import axios from 'axios';

const indianCities = [
  { name: "Mumbai", logoUrl: "/mumbai_logo.png" },
  { name: "Delhi", logoUrl: "/delhi-logo.png" },
  { name: "Bangalore", logoUrl: "/bangalore-logo.png" },
  { name: "Hyderabad", logoUrl: "/hyderabad-logo.png" },
  { name: "Ahmedabad", logoUrl: "/ahmedabad-logo.png" },
  { name: "Chennai", logoUrl: "/chennai-logo.png" },
  { name: "Kolkata", logoUrl: "/kolkata-logo.png" },
  { name: "Surat", logoUrl: "/surat-logo.png" },
  { name: "Pune", logoUrl: "/pune-logo.png" },
  { name: "Jaipur", logoUrl: "/jaipur-logo.png" },
  { name: "Lucknow", logoUrl: "/lucknow-logo.png" },
  { name: "Kanpur", logoUrl: "/kanpur-logo.png" },
  { name: "Nagpur", logoUrl: "/nagpur-logo.png" },
  { name: "Indore", logoUrl: "/indore-logo.png" },
  { name: "Thane", logoUrl: "/thane-logo.png" },
  { name: "Bhopal", logoUrl: "/bhopal-logo.png" },
  { name: "Visakhapatnam", logoUrl: "/visakhapatnam-logo.png" },
  { name: "Vadodara", logoUrl: "/vadodara-logo.png" },
  { name: "Patna", logoUrl: "/patna-logo.png" },
  { name: "Ghaziabad", logoUrl: "/ghaziabad-logo.png" },
  { name: "Ludhiana", logoUrl: "/ludhiana-logo.png" },
  { name: "Agra", logoUrl: "/agra-logo.png" },
  // Add more cities with their logo URLs as needed
];

const Navbar = ({ isAuthenticated, username, userProfileImage, cartItems = [] }) => {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState("nav-home");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userLocation, setUserLocation] = useState("Select City");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 650);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log('User coordinates:', latitude, longitude);
          getCityName(latitude, longitude);
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const getCityName = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`);
      const city = response.data.address.city || response.data.address.town || response.data.address.village;
      console.log('City name:', city);
      setUserLocation(city);
    } catch (error) {
      console.error('Error fetching city name:', error);
    }
  };

  const handleCityChange = (e) => {
    setUserLocation(e.target.value);
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
     navigate('/logout-greeting');
      // navigate('/');

    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const openHtmlFile = () => {
    const htmlFilePath = '../../../console/index.html';
    window.open(htmlFilePath, '_self');
  };

  return (
    <div className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      {/* <div className='select-city'>
        <select value={userLocation} onChange={handleCityChange}>
          <option value="">Select City</option>
          {indianCities.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div> */}
      <div className='nav-list'>
        <ul className={mobileMenu ? 'nav-menu mobile-active' : 'nav-menu'}>
          <li onClick={() => setMenu("nav-home")} className={menu === "nav-home" ? "active" : ""}>
            <Link to="/" onClick={scrollToTop}>Home</Link>
          </li>
          <li className="nav-services">
            <span onClick={() => setMenu("nav-services")} className={menu === "nav-services" ? "active" : ""}>Services</span>
            <ul className={menu === "nav-services" ? "submenu active" : "submenu"}>
              <li onClick={openHtmlFile}>Mygarage</li>
              <li onClick={() => setMenu("nav-ai")} className={menu === "nav-ai" ? "active" : ""}>
                <Link to="/ai" onClick={scrollToTop}>AI</Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setMenu("nav-about")} className={menu === 'nav-about' ? "active" : ""}>
            <Link to="/about" onClick={scrollToTop}>About</Link>
          </li>
          <li onClick={() => setMenu("nav-contact")} className={menu === 'nav-contact' ? "active" : ""}>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </li>
          {/* <li className='nav-cart'>
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" />
              {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
            </Link>
          </li> */}
          {isAuthenticated ? (
            <li className="nav-profile">
              <img
                src={userProfileImage || proficon}
                alt="Profile"
                className="profile-icon"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              />
              {showProfileMenu && (
                <ul className="profile-menu">
                  <li><button onClick={handleLogoutClick}>Logout</button></li>
                </ul>
              )}
            </li>
          ) : (
            <li className='nav-login'>
              <Link to="/authform" onClick={scrollToTop}>Login</Link>
            </li>
          )}
        </ul>
        <img src={menuicon} alt="Menu Icon" className='menuicon' onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
