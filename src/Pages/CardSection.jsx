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

export default function Cards() {
  return (
    <div className='beauty'>
         <div>
               <h1 className='CardTitle'>Our Products<hr /></h1></div>
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
