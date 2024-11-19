import React from 'react';
import { Button } from 'react-bootstrap';

export default function Navbarr() {
  return (
    <div className='Navbar'>
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
    </ul>
    <div className="dropdown">
  <Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Profile <i class='fas fa-caret-down' ></i>

  </Button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <Button className="dropdown-item" type="button">Sign Up</Button>
    <Button className="dropdown-item" type="button">Log In</Button>
  </div>
</div>
  </nav>
    </div>
   
  )
}
