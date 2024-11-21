import React, { useEffect, useState } from 'react';
import { dior } from './Api.js';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../style.css';
import { useCart } from './CartContext';


export default function Cards() {
  const [query, setQuery] = useState(""); 
  const [category, setCategory] = useState('ALL');
  const [filteredProducts, setFilteredProducts] = useState(dior);

  // Handle search query change
  function changeHandler(e) {
    setQuery(e.target.value);
  }
  function searchHandler() {
    const results = dior.filter((meraMakeup) =>
      meraMakeup.title.toLowerCase().includes(query.toLowerCase())
    
    ); 
    
    setFilteredProducts(results);
  }

  useEffect(() => {
    let filtered = dior;

    if (category !== 'ALL') {
      filtered = filtered.filter(product => product.Category === category);
    }

    if (query) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      
      );
    }

    setFilteredProducts(filtered);
  }, [query, category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
 
  const { totalQuantity } = useCart();
  return (
    <>
      <div className='shop-area'> 
        <div className='topnav'>
          <ul className='topnav-icons'>
            <li><button onClick={() => handleCategoryChange('ALL')} className="active">All</button></li>
            <li><button onClick={() => handleCategoryChange('Face')}>Faces</button></li>
            <li><button onClick={() => handleCategoryChange('Eyes')}>Eyes</button></li>
            <li><button onClick={() => handleCategoryChange('Lips')}>Lips</button></li>
          </ul>

          <div className='search-bar'>
            <input
              className='border'
              placeholder='Search here...'
              type="text"
              id="searchInput"
              value={query}
              onChange={changeHandler}
            />
            <span id="searchBtn">
            <button onClick={searchHandler} id="searchBtn">
              <i className='fa fa-search'></i> 
            </button>
            </span>
          </div>

          <Link to={`/cart`} className='cart-icon'>
            <i className="fas fa-shopping-cart"></i>
            {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
          </Link>
        </div>

        <div className='beauty'>
          <div>
            <h1 className='CardTitle'>Our Products<hr /></h1>
          </div>
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
          <br />
          <Link to={`/card/${id}`} className="cardBtn" >
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}