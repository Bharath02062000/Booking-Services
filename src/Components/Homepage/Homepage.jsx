import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import Background from '../Backgroung/Background';
import Hero from '../Hero/Hero';
import Cards from '../../Servicetypes/Cards/Cards';
import Services from '../../Servicetypes/ServicesScreen/services';
import Booknow from '../Booknow/Booknow';
import bookIcon from '../../assets/bookingicon.png'; // Make sure you have an icon/image for the button

function Homepage() { 
  let heroData = [
    { text1: " BEST PRICE", text2: "Better Service" },
    { text1: "OUR SERVICE IS THE KEY", text2: " To a fresh start" },
    { text1: "ALL AUTO SERVICE", text2: "Quality Automotive Care" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount(count => count === 2 ? 0 : count + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBookNowClick = () => {
    // navigate('/booknow');
  };

  return (
    <div className='Home'>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Cards />
      <Services />
      {/* <Booknow />  */}
      {/* <img
        src={bookIcon}
        alt="Book Now"
        className="book-now-icon"
        onClick={handleBookNowClick}
      />  */}
    </div>
  );
}

export default Homepage;
