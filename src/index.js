import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/glogalStyles';
//import Home from './containers/Home';
import Login from './containers/Login'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Login />
    <GlobalStyle />
  </>
);


