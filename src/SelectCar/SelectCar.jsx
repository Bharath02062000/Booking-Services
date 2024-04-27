import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './SelectCar.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const SelectCar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [brand, setBrand] = useState('');
  const [modal, setModal] = useState('');
  const [year, setYear] = useState('');
 
 
  const handleButtonClick = () => {
  
    navigate('/update');
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <form onSubmit={handleButtonClick}>
          <label>Car Brand</label>
          <input
            type='text'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder='Enter your Car Brand'
            required
          />
          <label>Car Model</label>
          <input
            type='text'
            value={modal}
            onChange={(e) => setModal(e.target.value)}
            placeholder='Enter your Car Model'
            required
          />
          <label>Car Year</label>
          <input
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder='Enter your Car Year'
            required
          />
          <button type='button' className='tn dark-btn'  onClick={handleButtonClick}>
            Get Services <FaArrowAltCircleRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectCar;
