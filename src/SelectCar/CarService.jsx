import React from 'react';

const CarService = ({ service }) => {
  // Concatenate the image filename with the path to your assets folder
  const imageUrl = `/assets/${service.image}`;

  return (
    <div>
      <img src={imageUrl} alt={service.name} />
      <h3>{service.name}</h3>
      <p>Price: ${service.price}</p>
    </div>
  );
};

export default CarService;
