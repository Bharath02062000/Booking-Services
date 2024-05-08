import React from 'react'
import './Ai.css'
import Ai1 from '../../assets/Ai1.png'
import aifleet01 from '../../assets/aifleet01.png'
import aifleet1 from '../../assets/aifleet1.png'
import aifleet2 from '../../assets/aifleet2.png'
import video1 from '../../assets/video1.mp4'
const 
Ai = () => {
  
 
  return (
    <div className='ai'>
      <div className='aidisplay'>
        <img src={Ai1} alt='' />
      </div>
   
    <div className='text2'>AI Services</div>
    <div className='text3'>Vehk's AI based Predictive Maintenance as a Service
( PMaaS ) for Vehicles</div>
<div className='text1'> Coming Soon....</div>
   
    <div className='predictive'>
    <div className='pre-img'>
            <img src={aifleet01} alt='' />
        </div>
  
        <div className='pretext'>
            <div className='prehead'>
            Predictive maintenance
            </div>
            <div className='aitext1'> Predictive maintenance is a proactive maintenance strategy that utilizes data analysis, machine learning algorithms, and sensor technology to predict when equipment or machinery is likely to fail. Rather than following a fixed schedule or waiting for a breakdown to occur, predictive maintenance aims to identify potential issues before they cause costly downtime or damage. Here are the key points about predictive maintenance</div>
        </div>
       
    </div>
    <div className='fleet'>
       
        <div className='aitext'>
            <div className='aihead'>
              Fleet Management
            </div>
            <div className='aitext1'>Fleet management refers to the administration and coordination of a company's fleet of vehicles. This typically includes a range of vehicles such as cars, trucks, vans, and sometimes even specialized vehicles like construction equipment or ships. Fleet management involves various tasks and responsibilities aimed at optimizing the efficiency, safety, and cost-effectiveness of the fleet operation. Here are some key aspects of fleet management</div>
        </div>
        <div className='fleet-img'>
            <img src={aifleet1} alt='' />
        </div>
    </div>
</div>
  
)
  
}

export default Ai
