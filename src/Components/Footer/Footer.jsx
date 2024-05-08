import React from 'react';
import './Footer.css';
import Logo1 from '../../assets/logo1.png';
import AppStoreImage from '../../assets/AppStoreImage.png';
import GooglePlayImage from '../../assets/GooglePlayImage.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={Logo1} alt="Logo" />
        </div>
        <div className="footer__social-icons">
          <p>follow us</p>
          <a href="https://facebook.com/letsvehk?mibextid=ZbWKwL/" className="footer__icon-link"><FaFacebook /></a>
          <a href="https://x.com/LETSVEHK?s=20/" className="footer__icon-link"><FaTwitter /></a>
          <a href="https://www.instagram.com/letsvehk?igsh=MXB1bzhzYmVoeTZ3bA==" className="footer__icon-link"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/vehk/" className="footer__icon-link"><FaLinkedinIn /></a>
          <a href="https://github.com/VEHK-source" className="footer__icon-link"><FaGithub /></a>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>Have questions or feedback? Feel free to contact us!</p>
          <button className="footer__contact-button"><Link to="/contact">Contact Us</Link></button>
        </div>
        <div className="footer__app">
          <h3>Download Our App</h3>
          <p>Get our app for easy access to our services.</p>
          <div className="footer__app-buttons">
            <img src={AppStoreImage} onClick={() => window.open("https://www.vehk.in/")} alt="App Store" className="footer__app-image" />
            <img src={GooglePlayImage} onClick={() => window.open("https://play.google.com/store/apps/details?id=branded.in.vehk")} alt="Google Play" className="footer__app-image" />
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__terms">
            <p><Link to={'/term'}>Terms of Service</Link></p>
            <p><Link to={'/privacy'}>Privacy Policy</Link></p>
            <p> <Link to={'/refund'}>Refund Policy</Link></p>
          </div>
          <div className="footer__address">
            <p>Address:<br/>  Idotinfinity(Vehk), 3rd floor, V.V Plaza, Patrika nagar,hitech City-500081, Telangana, India</p>
            <p>Phone: +91 9154186096</p>
            <p><a href='/contact'>Email: info@Vehk.in</a></p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 Idotinfinity(Vehk). All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
