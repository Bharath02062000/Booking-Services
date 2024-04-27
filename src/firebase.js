// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

import { getAuth, signOut } from "firebase/auth";

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);



const logout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };



export { app, analytics, logout }; // Export initialized Firebase app and analytics instance
