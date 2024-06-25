import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booknow.css';
import { useNavigate } from 'react-router-dom';
import alto from '../../assets/Book/alto.png';
import breeza from '../../assets/Book/breeza.png';
import logo1 from '../../assets/Book/logo1.png';
import logo2 from '../../assets/Book/logo2.png';
import creta from '../../assets/Book/creta.png';
import i20 from '../../assets/Book/i20.png';

const indianCities = [
  { name: "Mumbai", logoUrl: "/mumbai_logo.png" },
  { name: "Delhi", logoUrl: "/delhi-logo.png" },
  { name: "Bangalore", logoUrl: "/bangalore-logo.png" },
  { name: "Hyderabad", logoUrl: "/hyderabad-logo.png" },
  { name: "Ahmedabad", logoUrl: "/ahmedabad-logo.png" },
  { name: "Chennai", logoUrl: "/chennai-logo.png" },
  { name: "Kolkata", logoUrl: "/kolkata-logo.png" },
  { name: "Surat", logoUrl: "/surat-logo.png" },
  { name: "Pune", logoUrl: "/pune-logo.png" },
  { name: "Jaipur", logoUrl: "/jaipur-logo.png" },
  { name: "Lucknow", logoUrl: "/lucknow-logo.png" },
  { name: "Kanpur", logoUrl: "/kanpur-logo.png" },
  { name: "Nagpur", logoUrl: "/nagpur-logo.png" },
  { name: "Indore", logoUrl: "/indore-logo.png" },
  { name: "Thane", logoUrl: "/thane-logo.png" },
  { name: "Bhopal", logoUrl: "/bhopal-logo.png" },
  { name: "Visakhapatnam", logoUrl: "/visakhapatnam-logo.png" },
  { name: "Vadodara", logoUrl: "/vadodara-logo.png" },
  { name: "Patna", logoUrl: "/patna-logo.png" },
  { name: "Ghaziabad", logoUrl: "/ghaziabad-logo.png" },
  { name: "Ludhiana", logoUrl: "/ludhiana-logo.png" },
  { name: "Agra", logoUrl: "/agra-logo.png" },
  // Add more cities with their logo URLs as needed
];

const carBrands = [
  { name: "Suzuki", logo: logo1 },
  { name: "Hyundai", logo: logo2 },
  // Other brand objects...
];

const carModels = {
  "Suzuki": [
    { name: "Alto", image: alto },
    { name: "Breeza", image: breeza },
    // Other model objects...
  ],
  "Hyundai": [
    { name: "Creta", image: creta },
    { name: "i20", image: i20 },
    // Models for Brand B...
  ],
  // Other brand-model mappings...
};

const Booknow = () => {
  const [userLocation, setUserLocation] = useState("Select City");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log('User coordinates:', latitude, longitude);
          getCityName(latitude, longitude);
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const getCityName = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`);
      const city = response.data.address.city || response.data.address.town || response.data.address.village;
      console.log('City name:', city);
      setUserLocation(city);
    } catch (error) {
      console.error('Error fetching city name:', error);
    }
  };

  const handleCityChange = (e) => {
    setUserLocation(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // Reset selected model when brand changes
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!userLocation || userLocation === "Select City") {
      alert("Please select a city.");
    } else if (!selectedBrand) {
      alert("Please select a car brand.");
    } else if (!selectedModel) {
      alert("Please select a car model.");
    } else {
      navigate('/Listservice');
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className='.auth-overlay'>
    <div className='form-container'>
      <div className="flash-message-form">
      <span className="close-button" onClick={handleClose}>&times;</span>
        <h2>The Best Car Services in {userLocation}</h2>
        <form onSubmit={handleBookNow}>
          <div className="dropdown">
            Car Brand <br />
            <select value={selectedBrand} onChange={handleBrandChange}>
              <option value="">Select Car Brand</option>
              {carBrands.map(brand => (
                <option key={brand.name} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
            <div className="dropdown-logo">
              {selectedBrand && (
                <img src={carBrands.find(brand => brand.name === selectedBrand).logo} alt={selectedBrand} className="brand-logo" />
              )}
            </div>
          </div>
          <br />
          <div className="dropdown">
            Car Model <br />
            <select value={selectedModel} onChange={handleModelChange}>
              <option value="">Select Car Model</option>
              {selectedBrand && carModels[selectedBrand] && carModels[selectedBrand].map(model => (
                <option key={model.name} value={model.name}>
                  {model.name}
                </option>
              ))}
            </select>
            <div className="dropdown-logo">
              {selectedModel && (
                <img src={carModels[selectedBrand].find(model => model.name === selectedModel).image} alt={selectedModel} className="model-image" />
              )}
            </div>
          </div>
          <br />
          <button type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Booknow;
