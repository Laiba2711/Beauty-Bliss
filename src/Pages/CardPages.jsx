
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { dior } from './Api.js';
import '../style.css';
import { useCart } from './CartContext';

export default function CardPage() { 
  const { id } = useParams(); 
  const navigate = useNavigate();  
  const { addToCart } = useCart(); 
  const product = dior.find((item) => item.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found</div>; 
  }

  const { Image, title, description, price } = product;

  const viewCart = () => {
    navigate('/cart'); 
  };

  return (
    <section className="card-page">
      <img src={Image} alt={title} className="card-img" />
      <div className="card-description">
        <h1 className="card-title">{title}</h1>
        <p>{description}</p>
        <h3>{price}$</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={viewCart} id="cartButton">
          View Cart
        </button>
      </div>
    </section>
  );
}
