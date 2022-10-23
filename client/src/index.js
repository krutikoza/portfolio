import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import store from "./Store"
import { ParallaxProvider } from 'react-scroll-parallax';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

// import {Provider as alertProvider} from "react-alert"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
    <Provider store={store} >
      <App />  
    </ Provider>
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
