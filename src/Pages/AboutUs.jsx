import React from 'react'
import "./AboutUs.css";
import { Link } from 'react-router-dom';
export default function AboutUs() {
  return (
    <div>
<div className='qoutes'>
<div class="marquee">
        <div class="marquee-text">
            <span class="quote">"True beauty begins the moment you embrace your inner bliss."</span>
            <span class="quote">"Find your beauty, feel your bliss, and let them shine together."</span>
            <span class="quote">"Beauty is not just skin deep, it’s a feeling that starts with blissful self-care."</span>
            <span class="quote">"When you discover your bliss, your beauty shines effortlessly."</span>
        </div>
    </div>
</div>
    <section class="about-us">
      <div class="about">
        <div className='img'>
<h4>𝓑𝓮𝓪𝓾𝓽𝔂 𝓑𝓵𝓲𝓼𝓼</h4>
        </div>
        <div class="text">
          <h2>About Us</h2>
          <h5>WakeUp & MakeUp With <span>𝓑𝓮𝓪𝓾𝓽𝔂 𝓑𝓵𝓲𝓼𝓼</span></h5>
          <p>Welcome to <span>𝓑𝓮𝓪𝓾𝓽𝔂 𝓑𝓵𝓲𝓼𝓼</span>, where we believe that true beauty radiates from within and deserves to be celebrated. Our mission is to empower you to feel your best, inside and out, by offering a curated selection of high-quality skincare, beauty products, and expert advice. At Beauty Bliss, we are passionate about helping you discover the products that enhance your natural beauty while promoting self-care and confidence. Our team is dedicated to providing you with personalized service, ensuring that every experience with us is both blissful and transformative. Thank you for choosing Beauty Bliss – where beauty meets joy!</p>
          <div class="data">
            <Link to="/card" class="hire">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}