
import React from 'react'
import './services.css'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'
import service5 from '../../assets/service5.png'
import service6 from '../../assets/service6.png'
import service7 from '../../assets/service7.png'
import service8 from '../../assets/service8.png'
import service9 from '../../assets/service9.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'
import sideimg1 from '../../assets/sideimg1.png'
// import service1 from '../../assets/service1.png'
const Services = () => {
  return (
    <div className="container1">
      <div className='sub'>

        <div className="bannersSide">

      <div  className='service-text-head'><b>Trending</b> Automobile Services</div>


            <div className="row"> 
          <div className='image'>
            <img src={service1} alt="" />
            <div className='caption'>
              <img src={icon2} alt="" />
              <p>A/C Service</p>
            </div>
          </div>
          <div className='image'>
            <img src={service2} alt="" />
            <div className='caption'>
              <img src={icon1} alt="" />
              <p>Car Service</p>
            </div>
          </div>
          <div className='image'>
            <img src={service3} alt="" />
            <div className='caption'>
              <img src={icon8} alt="" />
              <p>Battery Service</p>
            </div>
          </div>
          </div>
          <div className="row"> 
          <div className='image'>
            <img src={service4} alt="" />
            <div className='caption'>
              <img src={icon4} alt="" />
              <p>Wheel Care</p>
            </div>
          </div>
          <div className='image'>
            <img src={service5} alt="" />
            <div className='caption'>
              <img src={icon5} alt="" />
              <p>Detailing Service</p>
            </div>
          </div>
          <div className='image'>
            <img src={service6} alt="" />
            <div className='caption'>
              <img src={icon7} alt="" />
              <p>Glass Replacement</p>
            </div>
          </div>
          </div>
          <div className="row"> 
          <div className='image'>
            <img src={service7} alt="" />
            <div className='caption'>
              <img src={icon6} alt="" />
              <p>Painting</p>
            </div>
          </div>
          <div className='image'>
            <img src={service8} alt="" />
            <div className='caption'>
              <img src={icon3} alt="" />
              <p>Suspension</p>
            </div>
          </div>
          <div className='image'>
            <img src={service9} alt="" />
            <div className='caption'>
              <img src={icon9} alt="" />
              <p>Car Wash</p>
            </div>
          </div>
          </div>
          

        </div>
      

      {/* side img */}
      
        <div className='sideimg'>
          <img src={sideimg1} alt="" />
        </div>

      </div>
      
    </div>
  )
}

export default Services;
