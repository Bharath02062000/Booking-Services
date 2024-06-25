import React from 'react';
import { FaCar,FaPaintBrush ,FaMotorcycle 
,FaBatteryHalf, FaSearch ,FaBrush ,FaOilCan, FaRing   } from 'react-icons/fa'; // Importing an example icon
import './Cards.css'; 
//import { BiWheel } from 'react-icons/bi';// Importing CSS file for styling
import { } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
 
const Cards = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="container">
      <div className="row">
     <div><Link to="/services" className="box"onClick={scrollToTop}><FaCar /> Car Services</Link></div> 
     <div>
     <Link to="/services" className='box1'onClick={scrollToTop}><FaMotorcycle /> Bike Service</Link>
     </div>

 
        {/* <div className="box"><FaRing /><Link to="/selectcar">Tire Services </Link></div>
        <div className="box"><FaBatteryHalf /> Battery</div>
      </div>
      <div className="row">
        <div className="box"><FaOilCan /><Link to="/selectcar"> Oil Change </Link></div>
        <div className="box"><FaBrush /><Link to="/selectcar"> Cleaning </Link></div>
        <div className="box"><FaPaintBrush /><Link to="/selectcar"> Inspection </Link></div>
        <div className="box"><FaSearch /><Link to="/selectcar"> Repair </Link></div> */}
      </div>
    </div>
  );
}

export default Cards;
