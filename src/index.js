import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Main Component
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css'
import { BillProvider } from './Context/BillContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
