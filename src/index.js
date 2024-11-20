import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComp from './App';
import { CartProvider } from './Pages/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CartProvider>
    <AppComp />
      
    </CartProvider>
    
  </React.StrictMode>
);


