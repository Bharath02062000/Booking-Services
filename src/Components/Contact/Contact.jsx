import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.png'
import phoneicon from '../../assets/phoneicon.png'
import locationicon from '../../assets/locationicon.png'
import mailicon from '../../assets/mailicon.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "880e9e6f-63e9-4e88-a948-549610ca61b3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msgicon} alt='' /></h3>
        <p>
            feel free to reach out through contact from or find our contact information below. your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.
        </p>
        <ul> 
            <li><img src={mailicon} alt='' />info@vehk.in</li>
            <li><img src={phoneicon} alt='' />+91 9154186096</li>
            <li><img src={locationicon} alt='' />3rd floor, V.V Plaza, Patrika Nagar<br/> Hitech City- 500081, Telangana </li>
        </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label> Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='Phone' placeholder='Enter your Phone Number' required/>
                <label>write your message here</label>
                <textarea name='message' id='' cols={30} rows={10} placeholder='Enter your message' required></textarea>
                <button type='Submit' className='tn dark-btn'> Submit Now <FaArrowAltCircleRight /></button>
            </form>
            <span>{result}</span>
            </div>      
            
    </div>
  )
}

export default Contact
