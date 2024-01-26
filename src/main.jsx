import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKrOvDq22lsRovRKsIqMWGfx5yBp17Va0",
  authDomain: "proyectofinalml-229a7.firebaseapp.com",
  projectId: "proyectofinalml-229a7",
  storageBucket: "proyectofinalml-229a7.appspot.com",
  messagingSenderId: "1093468830394",
  appId: "1:1093468830394:web:a75b84e8be6fc72676e083"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
