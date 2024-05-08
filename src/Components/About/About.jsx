import React from 'react'
import './About.css'
import misimg from '../../assets/misimg.png'
import visimg from '../../assets/visimg.png'

const About = () => {
  return (
    <div className='about'>
        {/* <div className='text1'> The Full of Story</div> */}
        <div className='text2'>About - Us</div>
        <div className='text3'>BOOK A TRUSTED MECHANIC  IN JUST A CLICK</div>
        <div className='mission'>
            <div className='mis-img'>
                <img src={misimg} alt='' />
            </div>
            <div className='mistext'>
                <div className='mishead'>
                    Mission
                </div>
                <div className='mistext1'>In our daily routine, we put a lot of thought into every little thing we do, making sure you’re getting high-quality and outstanding service. We aspire to provide you with the best professionals to ensure long-lasting results, and transparently share our process every step of the way. Browse our website for additional information about our services and see how we can be of assistance.</div>
            </div>
        </div>
        <div className='vision'>
      
            <div className='vistext'>
                <div className='vishead'>
                    Vision
                </div>
                <div className='mistext1'> We aspire to create an Eco system for Automobile services and need with the best professionals to ensure long-lasting results, and transparently share our process every step of the way. In future VEHK will be the one stop solution for every need of automobile. we at vehk ensure you the safety of your vehicle with professionally trained service technicians. Browse our website for additional information about our services and see how we can be of assistance.</div>
            </div>
            <div className='vis-img'>
                <img src={visimg} alt='' />
            </div>
        </div>
    </div>
      
  )
}

export default About
