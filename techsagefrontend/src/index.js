import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '/contactus',
    element: <ContactUs></ContactUs>
  },


])
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xufegyqmkqi8ezy1.us.auth0.com"
      clientId="s0ymz0pMwIHrQRKBgyJ0qDs54jIAS5DX"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={allrouter}></RouterProvider>

    </Auth0Provider>,

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
