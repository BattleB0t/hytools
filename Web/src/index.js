import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import "./css/scrollBars.css"
import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();