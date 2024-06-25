import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Listservice.css';
import engineRepairImage from '../../assets/Services/engineRepairImage.png';
import transmissionRepairImage from '../../assets/Services/transmissionRepair.png';
import brakeRepairImage from '../../assets/Services/brakeRepair.png';
import suspensionRepairImage from '../../assets/Services/suspensionRepair.png';
import exteriorWashImage from '../../assets/Services/exteriorWash.png';
import interiorCleaningImage from '../../assets/Services/interiorCleaning.png';
import engineCleaningImage from '../../assets/Services/engineCleaning.png';
import underbodyWashImage from '../../assets/Services/underbodyWash.png';
import oilChangeImage from '../../assets/Services/oilChange.png';
import batteryReplacementImage from '../../assets/Services/batteryReplacement.png';
import tyreReplacementImage from '../../assets/Services/tyreReplacement.png';
import wheelAlignmentImage from '../../assets/Services/wheelAlignment.png';
import seatRepairImage from '../../assets/Services/seatRepair.png';
import dashboardRepairImage from '../../assets/Services/dashboardRepair.png';
import upholsteryCleaningImage from '../../assets/Services/upholsteryCleaning.png';
import carpetReplacementImage from '../../assets/Services/carpetReplacement.png';

const Listservice = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Repairing Services');

  const services = {
    "Repairing Services": [
      { name: "Engine Repair", price: 2000, image: engineRepairImage },
      { name: "Transmission Repair", price: 2500, image: transmissionRepairImage },
      { name: "Brake Repair", price: 1500, image: brakeRepairImage },
      { name: "Suspension Repair", price: 1800, image: suspensionRepairImage },
    ],
    "Cleaning Services": [
      { name: "Exterior Wash", price: 500, image: exteriorWashImage },
      { name: "Interior Cleaning", price: 800, image: interiorCleaningImage },
      { name: "Engine Cleaning", price: 600, image: engineCleaningImage },
      { name: "Underbody Wash", price: 700, image: underbodyWashImage },
    ],
    "Mechanical Repair Services": [
      { name: "Oil Change", price: 300, image: oilChangeImage },
      { name: "Battery Replacement", price: 1500, image: batteryReplacementImage },
      { name: "Tyre Replacement", price: 1200, image: tyreReplacementImage },
      { name: "Wheel Alignment", price: 1000, image: wheelAlignmentImage },
    ],
    "Interior Services": [
      { name: "Seat Repair", price: 1000, image: seatRepairImage },
      { name: "Dashboard Repair", price: 2000, image: dashboardRepairImage },
      { name: "Upholstery Cleaning", price: 800, image: upholsteryCleaningImage },
      { name: "Carpet Replacement", price: 1500, image: carpetReplacementImage },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="services-container">
      <div className="category-buttons">
        {Object.keys(services).map(category => (
          <button 
            key={category} 
            className={`category-button ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {selectedCategory && (
        <div className="service-category">
          <h2>{selectedCategory}</h2>
          <div className="service-list">
            {services[selectedCategory].map((service, index) => (
              <div key={service.name} className="service-item">
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-details">
                  <p className="service-name">{service.name}</p>
                  <p className="service-price">Price: ₹{service.price}</p>
                  <button onClick={() => addToCart(service)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Listservice.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Listservice;
