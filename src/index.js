import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2NOyUBcmAP7A-yBTmF4Mtx_nmtlnYvII",
  authDomain: "coderhouse-ecommerce-dc532.firebaseapp.com",
  projectId: "coderhouse-ecommerce-dc532",
  storageBucket: "coderhouse-ecommerce-dc532.appspot.com",
  messagingSenderId: "58203480093",
  appId: "1:58203480093:web:39c12842f0f06391d926f4"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
