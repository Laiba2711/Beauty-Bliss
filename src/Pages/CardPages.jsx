import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { dior } from './Api.js';
import '../style.css';
import { useCart } from './CartContext'; // Import useCart from the CartContext

export default function CardPage() { 
  const { id } = useParams(); 
  const navigate = useNavigate(); // useNavigate for navigation
  const { addToCart } = useCart(); // Get addToCart from the CartContext
  const product = dior.find((item) => item.id === parseInt(id)); // Find the product by id
  
  if (!product) {
    return <div>Product not found</div>; // Handle case where product doesn't exist
  }

  const { Image, title, description, price } = product;

  const viewCart = () => {
    navigate('/cart'); // Navigate to the cart page
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
