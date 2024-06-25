import React, { useEffect, useState } from 'react';
import './Ai.css';
import Ai1 from '../../assets/Ai1.png';
import aifleet01 from '../../assets/aifleet01.png';
import aifleet1 from '../../assets/aifleet1.png';
import aifleet2 from '../../assets/aifleet2.png';
import aifleet3 from '../../assets/aifleet3.png';
import aifleet5 from '../../assets/aifleet5.png';
import aifleet4 from '../../assets/aifleet4.png';
import aifleet6 from '../../assets/aifleet6.png';
import aifleet8 from '../../assets/aifleet8.svg';
import aifleet9 from '../../assets/aifleet9.svg';

const Ai = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slideIndex]);

  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    let newIndex = slideIndex + 1;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    setSlideIndex(newIndex);
    slides[newIndex - 1].style.display = "block";
  }

  return (
    <div className='ai'>
      <div className='aidisplay'>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={Ai1} style={{ width: '100%' }} alt='' />
            {/* <div className="text">
Vehk's AI based Predictive Maintenance as a Service<br/>
( PMaaS ) for Vehicles <br/>
Coming Soon......</div> */}
          </div>
          <div className="mySlides fade">
            <img src={aifleet3} style={{ width: '100%' }} alt='' />
            {/* <div className="text">
Unlock a Safer Journey with Vehk's AI <br/>
Coming Soon.... </div> */}
          </div>
          <div className="mySlides fade">
            <img src={aifleet2} style={{ width: '100%' }} alt='' />
            <div className="text"></div>
          </div>
        </div>
      </div>

      <div className='text2'>AI Services</div>
      <div className='text3'>Vehk's AI based Predictive Maintenance as a Service (PMaaS) for Vehicles</div>
      <div className='text1'>Coming Soon....</div>
      <div className='Every'>
"Every scratch on the bumper holds a memory. Every dent tells a story. We know it's not just a machine; it's a vessel of your cherished moments. When you entrust us with your vehicle, you're handing us a piece of your life. We take that responsibility to heart, treating your ride as if it were our own"
      </div>

      <div className='predictive'>
        <div className='pre-img'>
          <img src={aifleet5} alt='' />
        </div>

        <div className='pretext'>
          {/* <div className='prehead'>
            Predictive maintenance
          </div> */}
          <div className='aitext1'> Welcome to the future of vehicle care and safety. At Vehk, we understand that your journey is more than just a ride; it's a connection to your loved ones, your dreams, and your life's adventures. That's why we've created a revolutionary Predictive Maintenance service that goes beyond mechanics. it's a guardian angel for your vehicle</div>
        </div>

      </div>
      <div className='fleet'>

        <div className='aitext'>
          <div className='aihead'>
          Journey Protection
          </div>
          <div className='aitext1'>Every turn you take, every road you explore, and every moment you share with your vehicle deserves the best care. Our cutting-edge GPS tracker empowers us to provide real-time insights into your vehicle's health. From engine whispers to brake hugs, we're right there with you, ensuring that your journey is always safe and smooth.</div>
        </div>
        <div className='fleet-img'>
          <img src={aifleet4} alt='' />
        </div>
        
      </div>
      <div className='predictive'>
      <div className='pre-img2'>
          <img src={aifleet8} alt='' />
        </div>
        <div className='pretext'>
          <div className='prehead'>
          Seamlessly Connected
          </div>
          <div className='aitext1'> 
We're not just about maintenance; we're about integration. Our service seamlessly connects with your vehicle's eco-system, working in harmony with onboard sensors and systems. From fuel efficiency to tire health, we cover every aspect to ensure your vehicle performs at its peak</div>
        </div>
       

      </div>
      <div className='predictive1'>
      

        <div className='pretext'>
          <div className='aihead'>
          Personalized Care
          </div>
          <div className='aitext1'> Your vehicle deserves individual attention, just like you do. With Vehk's Predictive Maintenance, we craft a unique care plan tailored to your vehicle's personality and needs. Through AI-powered analysis and a touch of human expertise, we're always one step ahead in understanding what your faithful companion requires.</div>
        </div>
        <div className='pre-img'>
          <img src={aifleet6} alt='' />
        </div>
      </div>
      <div className='predictive2'>
      <div className='pre-img2'>
          <img src={aifleet9} alt='' />
        </div>
        <div className='pretext'>
          <div className='prehead'>
          Peace of Mind
          </div>
          <div className='aitext1'> 
          Worry-free drive where you can focus on the joy of the journey. Our Predictive Maintenance service gives you peace of mind, knowing that we're watching over your vehicle's well-being 24/7. Be it a cross-country road trip or a simple grocery run, you can drive with confidence.</div>
        </div>
        

      </div>
    
    </div>
  )

}

export default Ai;
