import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart = [], removeFromCart, clearCart, handleBooking }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ₹{calculateTotal()}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleBooking}>Proceed to Booking</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  handleBooking: PropTypes.func.isRequired,
};

export default Cart;
