import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Background from '../Backgroung/Background';
import Hero from '../Hero/Hero';
import Cards from '../../Servicetypes/Cards/Cards';
import Services from '../../Servicetypes/ServicesScreen/services';
import { useEffect, useState } from 'react';
 

function Homepage() { 

  let heroData = [
    { text1: " BEST PRICE", text2: "Better Service" },
    { text1: "OUR SERVICE IS THE KEY", text2: " To a fresh start" },
    { text1: "ALL AUTO SERVICE", text2: "Quality Automotive Care" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount(count => count === 2 ? 0 : count + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);


 return (
    <div className='app'>
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
      
     </div>
  );
}

export default Homepage;
