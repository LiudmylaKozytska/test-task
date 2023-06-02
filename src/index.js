import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
