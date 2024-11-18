import React from 'react';
export default function() {
  return (
    <div className='Navbar'>
 <nav>
    <input type="checkbox" id="check"/>
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
   <img src="logo1.JPG" alt="" height="100px"   />
    <ul className='nav-icons'>
      <li><a class="active" href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </nav>
    </div>
   
  )
}
