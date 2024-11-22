import React, { useState } from 'react';
import "./Slider.css"

const ImageSlider = () => {
  // State to track the current active slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = [
    './Slider1.webp',
    './Slider2.jpg',
    './Slider3.jpg',
    './Slider4.jpg',
    './Slider5.jpg',
    './Slider6.jpg',
    './Slider7.jpg',
    './Slider8.jpg',
    './Slider9.jpg',
    './Slider10.jpg',
    // Add more images if needed
  ];

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
        <div className='heading'>
<h1>𝓗𝓮𝓻𝓮'𝓻𝓮 𝓼𝓸𝓶𝓮 𝓶𝓪𝓴𝓮𝓾𝓹 𝓭𝓮𝓼𝓲𝓰𝓷𝓼!</h1>
        </div>

        <div className='slider-box'>

        <div className="slider">
        <button className="prev-button" onClick={prevSlide}>𝓹𝓻𝓮𝓿</button>
<div className='img-box'>
<img src={images[currentIndex]} alt="Slider" className="slider-image"  />
<h1>𝓒𝓱𝓸𝓸𝓼𝓮 & 𝓽𝓻𝔂
</h1>
</div>
        <button className="next-button" onClick={nextSlide}>𝓷𝓮𝔁𝓽</button>
      </div>
      <div className='Slider-para'>
      <h5>WakeUp & MakeUp With <span>𝓑𝓮𝓪𝓾𝓽𝔂 𝓑𝓵𝓲𝓼𝓼!</span></h5>
      <p>Welcome to <span>𝓑𝓮𝓪𝓾𝓽𝔂 𝓑𝓵𝓲𝓼𝓼</span>, where we believe that true beauty radiates from within and deserves to be celebrated. Our mission is to empower you to feel your best, inside and out, by offering a curated selection of high-quality skincare, beauty products, and expert advice. At Beauty Bliss, we are passionate about helping you discover the products that enhance your natural beauty while promoting self-care and confidence. Our team is dedicated to providing you with personalized service, ensuring that every experience with us is both blissful and transformative. Thank you for choosing Beauty Bliss – where beauty meets joy!</p>
      </div>
        </div>
    </div>
  );
};

export default ImageSlider;