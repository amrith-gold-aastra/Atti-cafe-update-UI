
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './components/screens/landingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/screens/pages/homePage/HomePage';
import "./components/assets/Global.css";
import GiftPage from './components/screens/pages/giftPage/GiftPage';
import OrderPage from './components/screens/pages/orderPage/OrderPage';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes >
            {/* <Route path='/Signup' element={<LandingPage />} /> */}            
            <Route element={<LandingPage />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/gift' element={<GiftPage/>}/>
            <Route path='/order' element={<OrderPage/>}/>
            </Route>
            
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
