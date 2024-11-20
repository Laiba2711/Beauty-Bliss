import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Cards from './CardSection';
import CardPage from './CardPages'; 
import Cart from './Cart';
import Signup from '../Components/Signup';
import Login from '../Components/login';
import HeroSection from './HeroSection';
import Footer from '../Components/Footer';
import Navbarr from '../Components/Navbar';
import ScrollToTop from '../ScrollToTop';


export default function NavigatePage() {
  return (
        <>
    <BrowserRouter>
        <ScrollToTop/>
       <Navbarr />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}


