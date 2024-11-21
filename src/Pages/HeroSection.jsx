import React from 'react'
import "../style.css"
import Cards from './CardSection'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Popup from '../PopUp'
export default function HeroSection() {
  return (
    <>
   <div className="heroSec">
    <div className="containerr">
      <div className="image-section left">
        <img src="./BB-HERO2.jpg" alt="Left Image" />
      </div>
      <h1 className="title">𝓑𝓮𝓪𝓾𝓽𝔂𝓑𝓵𝓲𝓼𝓼</h1>
      <h2 className="title2">Enjoy shopping with Dior.</h2>
      <div className="image-section right">
        <img src="./BB-HERO3.jpg" alt="Right Image"/>
      </div>
    </div>
  </div>
  <Cards />
  <AboutUs />
  <ContactUs />
    </>
    
  )
}
