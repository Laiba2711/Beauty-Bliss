import React from 'react';
// import { Link } from 'react-router-dom';

export default function() {
  return (
   <nav className='navbar'>
   <div className='header'>
   <img src="logo1.JPG" alt=""  height="120px"/>
    <ul className='header-menu'>
    <a class="active" href="#home">
    <i class="fa-solid fa-house-user" aria-hidden="true"></i> HOME</a>
  <a href="#about">
  <i class="fa-solid fa-circle-info" aria-hidden="true"></i>  ABOUT</a>
  <a href="#contact">
  <i class="fa-solid fa-briefcase" aria-hidden="true"></i>   SERVICES</a>
  <a href="#contact">
  <i class="fa-solid fa-address-book" aria-hidden="true"></i>   CONTACT</a>
  <a href="#contact">
  <i class="fa-solid fa-user" aria-hidden="true"></i>  PROFILE</a>
  
    </ul>
   
   </div>
   <div className='topnav'>
   <div className="menu">
  <a class="active" href="#home">ALL</a>
  <a href="#about">FACES</a>
  <a href="#contact">EYES</a>
  <a href="#contact">LIPS</a>
  </div>
  <div class="search-container">
            <input  type="text" id="searchBar" placeholder="Type to search..."  onchange="searchData()"  />
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
        <div className="cart">
        <i class="fa fa-shopping-cart" ></i>
        </div>
   </div>
   
   </nav>
  )
}
