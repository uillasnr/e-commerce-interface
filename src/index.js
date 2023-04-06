import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './styles/glogalStyles';
//import Home from './containers/Home';
//import Login from './containers/Login'
import Register from './containers/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Register />
    <ToastContainer autoClose={2000} theme='colored' />
    <GlobalStyle />
  </>
);


