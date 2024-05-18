import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Change the following line to interchange between App and AppClass */}
    <AppClass />
    {/* <App /> */}
  </React.StrictMode>
);
