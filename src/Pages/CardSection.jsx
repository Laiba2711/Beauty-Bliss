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
// import React from 'react';
// import { dior } from './Api.js';
// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link for routing
// import '../style.css';

// const filterProducts = (category) => {
//   setFilteredCategory(category);
// };

// const displayedProducts = dior.filter(
//   (product) => filteredCategory === 'ALL' || product.Category === filteredCategory
// );

// const addToCart = (productId) => {
//   setCart((prevCart) => {
//     const existingProduct = prevCart.find((item) => item.id === productId);
//     if (existingProduct) {
//       return prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       );
//     }
//     const product = dior.find((item) => item.id === productId);
//     return [...prevCart, { ...product, quantity: 1 }];
//   });
// };

// const viewCart = () => {
//   navigate('/cart', { state: { cart } });
// };


// export default function Cards() {
//   return (
//     <>
//      <div Shop-area>
// <div className='topnav'>
//    <ul className='topnav-icons'>
//       <li><button onClick={() => handleCategoryChange('ALL')} className="active" >All</button></li>
//       <li><button onClick={() => handleCategoryChange('Face')}>  Faces </button></li>
//       <li><button onClick={() => handleCategoryChange('Eyes')} >Eyes</button></li>
//       <li><button onClick={() => handleCategoryChange('Lips')}>Lips</button></li>
//   </ul>
//       <div className='search-bar'>
//     <input type="search" className='border' placeholder='Search here...' />
//       </div>
//       </div>
//     <div className='beauty'>
//          <div>
//                <h1 className='CardTitle'>Our Products<hr /></h1></div>

//       {dior.map((meraMakeup) => (
//         <Makeup key={meraMakeup.id} {...meraMakeup} />
//       ))}
//     </div>
//      </div>
//      </>
//   );
// }

// function Makeup({ id, Image, title, price }) {
//   return (
//     <div className='product'>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={Image} />
//         <Card.Body>
//           <Card.Title className='source'>{title}</Card.Title>
//           <Card.Text className='price'>${price}</Card.Text>
//           {/* Use Link to navigate to the card page */}
//           <br />
//           <Link to={`/card/${id}`} className="cardBtn" >
//             View Details
//           </Link>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { dior } from './Api.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

export default function Cards() {
  const [filteredCategory, setFilteredCategory] = useState('ALL');
  const [cart, setCart] = useState([]);

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  // Display products based on the selected category
  const displayedProducts = dior.filter(
    (product) => filteredCategory === 'ALL' || product.Category === filteredCategory
  );

  // Add to cart function
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const product = dior.find((item) => item.id === productId);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <div className="Shop-area">
        <div className="topnav">
          <ul className="topnav-icons">
            <li>
              <button onClick={() => handleCategoryChange('ALL')} className="active">
                All
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange('Face')}>Faces</button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange('Eyes')}>Eyes</button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange('Lips')}>Lips</button>
            </li>
          </ul>
          <div className="search-bar">
            <input type="search" className="border" placeholder="Search here..." />
          </div>
        </div>
        <div className="beauty">
          <div>
            <h1 className="CardTitle">
              Our Products
              <hr />
            </h1>
          </div>
          {displayedProducts.map((meraMakeup) => (
            <Makeup key={meraMakeup.id} {...meraMakeup} />
          ))}
        </div>
      </div>
    </>
  );
}

function Makeup({ id, Image, title, price }) {
  return (
    <div className="product">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title className="source">{title}</Card.Title>
          <Card.Text className="price">${price}</Card.Text>
          <br />
          <Link to={`/card/${id}`} className="cardBtn">
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
