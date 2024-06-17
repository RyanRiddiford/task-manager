/**
 * Renders App to HTML document
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Create's ReactDOM root for rendering app
const root = ReactDOM.createRoot(document.getElementById('root'));
//Render the React app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
