import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import AuthForm from './Components/AuthForm/AuthForm';
import Carserv from './Servicetypes/ServicesScreen/Carserv';
import Contact from './Components/Contact/Contact';
import Homepage from './Components/Homepage/Homepage';
import './App.css';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import SelectCar from './SelectCar/SelectCar';
import RenderCarDetails from './SelectCar/renderedCarDetails';
import Term from './Components/Term/Term';
import Privacy from './Components/Privacy/Privacy';
import Profile from './Components/Profile/Profile';
import Refund from './Components/Refund/Refund';
import Cards from './Servicetypes/Cards/Cards';
import Updatesoon from './Components/Updatesoon/Updatesoon';
import Ai from './Components/Ai/Ai';
import Services from './Servicetypes/ServicesScreen/services';
import Listservice from './Components/Listservices/Listservice';
import Welcome from './Components/Welcome/Welcome';
import Faq from './Components/Faq/Faq';
import LogoutGreeting from './LogoutGreeting/LogoutGreeting';
import Booknow from './Components/Booknow/Booknow';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWEFragMukqLYjTPvg9DxVjRe3GT6oG8c",
  authDomain: "vehk-web.firebaseapp.com",
  databaseURL: "https://vehk-web-default-rtdb.firebaseio.com",
  projectId: "vehk-web",
  storageBucket: "vehk-web.appspot.com",
  messagingSenderId: "775101423336",
  appId: "1:775101423336:web:1df68725a531b1c016f35d",
  measurementId: "G-7YX90J2CR5"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    setCartItems((prevItems) => [...prevItems, service]);
    setCart([...cart, service]);
  };
  // const addToCart = (service) => {
  // setCart([...cart, service]);
  //  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  // Check if user is null before accessing properties
  const displayName = user ? user.displayName : null;
  const userProfileImage = user ? user.photoURL : null;
  const [cart, setCart] = useState([]);
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleBooking = () => {
    alert('Proceeding to booking...');
    // Add your booking logic here
  };

  return (
    <Router>
      <div className='app'>
        <Navbar isAuthenticated={isAuthenticated} username={displayName} userProfileImage={userProfileImage} cartItems={cartItems}  />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/authform" element={<AuthForm />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carserv' element={<Carserv />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={    <Cart
        cart={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        handleBooking={handleBooking}
      />} />
          <Route path='/order' element={<OrderPlace />} />
          <Route path='/selectcar' element={<SelectCar />} />
          <Route path='/rendercardetails' element={<RenderCarDetails />} />
          <Route path='/term' element={<Term />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path="/profile" element={<Profile username={displayName} userProfileImage={userProfileImage} />} />
          <Route path='/refund' element={<Refund />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/update' element={<Updatesoon />}  />
          <Route path='/ai' element={<Ai/>}/>
          <Route path='/services' element={<Services />} />
          <Route path='/ListService' element={  <Listservice addToCart={addToCart} />} />
          <Route path='/welcome' element={ <Welcome />} />
          <Route path='/Faqs' element={<Faq />} />
          <Route path='/logout-greeting' element={<LogoutGreeting />} />
          <Route path='/booknow' element={<Booknow />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
