import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importujemy App
import './style.css'; // Importujemy style globalne

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

