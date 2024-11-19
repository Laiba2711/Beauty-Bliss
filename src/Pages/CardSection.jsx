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
import React , { useEffect, useState }  from 'react';
import { dior } from './Api.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../style.css';

export default function Cards() {
  const [filteredProducts, setFilteredProducts] = useState(dior); // Initial products
  const [category, setCategory] = useState('ALL'); // Set initial category to 'ALL'

  // Update filtered products when category changes
  useEffect(() => {
    if (category === 'ALL') {
      setFilteredProducts(dior);
    } else {
      const products = dior.filter(product => product.Category === category);
      setFilteredProducts(products);
    }
  }, [category]);

  // Function to handle category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <>
     <div Shop-area>
<div className='topnav'>
   <ul className='topnav-icons'>
      <li><button onClick={() => handleCategoryChange('ALL')} className="active" >All</button></li>
      <li><button onClick={() => handleCategoryChange('Face')}>  Faces </button></li>
      <li><button onClick={() => handleCategoryChange('Eyes')} >Eyes</button></li>
      <li><button onClick={() => handleCategoryChange('Lips')}>Lips</button></li>
  </ul>
      <div className='search-bar'>
    <input type="search" className='border' placeholder='Search here...' />
      </div>

      </div>
    <div className='beauty'>
         <div>
               <h1 className='CardTitle'>Our Products<hr /></h1></div>

      {filteredProducts.map((meraMakeup) => (
        <Makeup key={meraMakeup.id} {...meraMakeup} />
      ))}
    </div>
     </div>
     </>
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
