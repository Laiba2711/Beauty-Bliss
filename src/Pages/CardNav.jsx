import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './CardSection';
import CardPage from './CardPages';  // The page for individual product details
import Cart from './Cart';

export default function CardNav() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/card/:id" element={<CardPage />} /> {/* Dynamic route for each product */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}


