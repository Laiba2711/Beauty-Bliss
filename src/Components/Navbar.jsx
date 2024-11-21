import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      <li><Link to="/" className="active">Home</Link></li>
      <li><Link to="/card">Product</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>      
    </ul>
      
    
    <div className="dropdown">
  <Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Profile <i class='fas fa-caret-down' ></i>
  </Button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <Link to="/signup" className="dropdown-item" type="button">Sign Up </Link>
    <Link to="/login" className="dropdown-item" type="button">Log In </Link>
  </div>
</div>

  </nav>
    </div>
   
  )
}
