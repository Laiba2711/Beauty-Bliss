import React from 'react';

export default function Navbarr() {
  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
   <img src="logo1.png" alt="" height="80%"   />
    <ul className='nav-icons'>
      <li><a class="active" href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </nav>
  )
}
