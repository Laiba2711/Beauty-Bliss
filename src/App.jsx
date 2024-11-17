import React from 'react';
import HeroSection from './Pages/HeroSection';
import Cards from './Pages/CardSection';
import CardNav from './Pages/CardNav';
import Navbar from './Components/Navbar';
export default function AppComp() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <CardNav />
    </>
  )
}
