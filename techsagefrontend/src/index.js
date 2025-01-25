import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';
import LogoutButton from './pages/Sign_out';
import SignIn from './pages/SignIn';
import Tutorial from './pages/Tutorial';
import UserProfile from './pages/UserProfile';
import Kitboxes from './pages/KItboxes';
import AddressForm from './pages/UserAddressform';
import TermsAndConditions from './pages/Termandconditions';
import PrivacyPolicies from './pages/Privacypolicy';

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
  {
    path: '/log_in',
    element:<SignIn></SignIn>
  },
  {
    path:'/log_out',
    element:<LogoutButton></LogoutButton>
  },
  {
    path:'/tutorial',
    element:<Tutorial></Tutorial>
  },
  {
    path:'/kitboxes',
    element:<Kitboxes></Kitboxes>

  },
  {
    path:'/profile',
    element:<UserProfile></UserProfile>
  },
  {
    path:'/profile/addAddress',
    element:<AddressForm></AddressForm>
  },
  {
    path:'/terms_and_conditions',
    element:<TermsAndConditions></TermsAndConditions>
  },
  {
    path:'privacy_policies',
    element:<PrivacyPolicies></PrivacyPolicies>
  }
  


])
root.render(
  <React.StrictMode>
   
      <RouterProvider router={allrouter}></RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
