// import React from 'react'
// import { dior } from './Api.js'
// import {Card}  from 'react-bootstrap'
// import "../style.css"

// export default function Cards() {
//   return (
//       <div className='beauty'>
//         <div>
//         <h1 className='CardTitle'>Our Products</h1></div>
//         {
//           dior.map((meraMakeup)=>(
//           <Makeup {...meraMakeup}/>
//         ))}
//       </div>  
//   )
// }
// function Makeup({Image, title, price}) {
//     return (
//         <>
//         <div className='product'>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={Image} />
//               <Card.Body>
//                 <Card.Title className='source'>{title}</Card.Title>
//                 <Card.Text className='price'>${price}</Card.Text>
//               </Card.Body>
//             </Card>
//          </div>
//             </>
//     )
// }
import React, { useState, useEffect } from 'react';
import { dior } from './Api.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../style.css';
import cartsection from './cartsection.jsx';


export default function Cards() {
  const [query, setQuery]= useState("");


  function changeHandler(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  return (

     <div Shop-area>
<div className='topnav'>
<ul className='topnav-icons'>
      <li><a class="active" href="#">All</a></li>
      <li><a href="#">Faces</a></li>
      <li><a href="#">Eyes</a></li>
      <li><a href="#">Lips</a></li>
      {/* <li><a href="#">Lips</a></li> */}
    </ul>
      <div className='search-bar'>
    <input className='border' placeholder='Search here...' type="text" id="searchInput" value={query}
      onChange={changeHandler} />
      <span id="searchBtn" >
      <i className='fa fa-search' ></i>
      </span>
      </div>
      <div className='cart-icon'>
      <i class="fas fa-shopping-cart"></i>
          </div>
      </div>
    <div className='beauty'>
         <div>
               <h1 className='CardTitle'>Our Products<hr /></h1></div>

      {dior.filter((meraMakeup)=>{
        return meraMakeup.title.toLowerCase().includes(query);
      }).map((meraMakeup) => (
        <Makeup key={meraMakeup.id} {...meraMakeup} />
      ))}
    </div>
     </div>

  );
}

function Makeup({ id, Image, title, price }) {
  return (
    <div className='product'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title className='source'>{title}</Card.Title>
          <Card.Text className='price'>${price}</Card.Text>
          {/* Use Link to navigate to the card page */}
          <br />
          <Link to={`/card/${id}`} className="cardBtn" >
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
