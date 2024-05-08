import React, { useState, useEffect } from 'react';
import './Booknow.css';
import  alto from '../../assets/Book/alto.png'
import breeza from '../../assets/Book/breeza.png'
import logo1 from '../../assets/Book/logo1.png'
import logo2 from '../../assets/Book/logo2.png'
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
  { name: "Suzuki", logo:  logo1},
  { name: "Hyundai", logo: logo2},
  // Other brand objects...
];

const carModels = {
  " Suzuki": [
    { name: "alto", image: alto  },
    { name: " breeza", imag:breeza },
    // Other model objects...
  ],
  " Hyundai": [
    { name: "alto", image: alto },
    { name: " breeza", imag:breeza },
    // Models for Brand B...
  ],
  // Other brand-model mappings...
};


const Booknow = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log('User coordinates:', latitude, longitude);
  
          // Simulate fetching city name from coordinates (replace with your logic)
          const userCity = "Select City"; // Example city
          setUserLocation(userCity);
        },
        error => {
          console.error('Error getting user location:', error);
          // Provide feedback to the user or handle the error appropriately
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Provide feedback to the user or handle the lack of geolocation support
    }
  }, []);

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


  return (
    <div className="flash-message-form">
    <div className='select-city'>
      {/* Select City dropdown */}
      <select onChange={handleCityChange}>
        <option value="">Select City</option>
        {indianCities.map(city => (
          <option key={city.name} value={city.name}>
            <img src={city.logo} alt={city.name} className="city-logo" />
            {city.name}
          </option>
        ))}
      </select>
    </div>
    <h2>The Best Car Services in {userLocation}</h2>
    <form>
      {/* Car Brand dropdown */}
      <select value={selectedBrand} onChange={handleBrandChange}>
        <option value="">Select Car Brand</option>
        {carBrands.map(brand => (
          <option key={brand.name} value={brand.name}>
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
            {brand.name}
          </option>
        ))}
      </select>
      {/* Car Model dropdown */}
      <select value={selectedModel} onChange={handleModelChange}>
        <option value="">Select Car Model</option>
        {selectedBrand && carModels[selectedBrand] && carModels[selectedBrand].map(model => (
          <option key={model.name} value={model.name}>
            <img src={model.image} alt={model.name} className="model-image" />
            {model.name}
          </option>
        ))}
      </select>
      <button type="submit">Book Now</button>
    </form>
  </div>
);
};

export default Booknow;
