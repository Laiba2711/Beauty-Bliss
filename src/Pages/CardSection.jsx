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
import React from 'react';
import { dior } from './Api.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../style.css';
import {useState} from "react";
import input from '../Components/InputField.jsx';

const CardSection = () =>{
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  return(
    <div>
      <h1>Input Field Example</h1>
      <input  type="text" id="searchBar" placeholder="Type to search..."  onchange="searchData()"  />
      </div>
  )
};



export default function Cards() {
  return (
    <div className='beauty'>
      {dior.map((meraMakeup) => (
        <Makeup key={meraMakeup.id} {...meraMakeup} />
      ))}
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
          <Link to={`/card/${id}`} className="cardBtn">
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
