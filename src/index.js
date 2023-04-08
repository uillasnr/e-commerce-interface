import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './styles/glogalStyles';
import { UserProvider } from './hooks/UserContext';
import Routes from './routes/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme='colored' />
    <GlobalStyle />
  </>
);


