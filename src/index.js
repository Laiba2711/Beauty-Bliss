import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComp from './App';
import { CartProvider } from './Pages/CartContext';
import Popup from './PopUp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CartProvider>
    <AppComp />  
    <Popup />
    </CartProvider>
    
  </React.StrictMode>
);


