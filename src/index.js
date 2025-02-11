import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client'
import App from './App'; // Your app component
import './App.css'; // Your styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(<App />); // Render the App component
