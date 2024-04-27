import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from React Router
import carData from './carData.json';
import CarService from './CarService';

const RenderCarDetails = () => {
  const location = useLocation(); // Initialize useLocation
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    // Parse query parameters from URL
    const searchParams = new URLSearchParams(location.search);
    const brand = searchParams.get('brand');
    const modal = searchParams.get('modal');
    const year = searchParams.get('year');


    // Find car details based on query parameters
    const foundCar = carData.cars.find(
      (car) =>
        car.brand.toLowerCase() === brand.toLowerCase() &&
        car.modal.toLowerCase() === modal.toLowerCase() &&
        car.year === parseInt(year)
    );

    // Set car details state
    if (foundCar) {
      setCarDetails(foundCar);
    } else {
      setCarDetails(null);
    }
  }, [location.search]);

  return (
    <div className='carservices'>
      {carDetails ? (
        <div>
          <h2>Car Details</h2>
          <p>Brand: {carDetails.brand}</p>
          <p>Modal: {carDetails.modal}</p>
          <p>Year: {carDetails.year}</p>
          <h3>Services:</h3>
          <ul>
            {carDetails.services.map((service, index) => (
              <li key={index}>
                  <img src={`/assets/${service.image}`} alt={service.name} style={{ width: '50px', height: '50px' }} />
                {service.name} - ${service.price}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No car details found</p>
      )}
    </div>
  );
};

export default RenderCarDetails;
