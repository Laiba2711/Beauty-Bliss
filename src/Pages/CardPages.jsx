import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook to get dynamic route params
import { dior } from './Api.js';
import { Button } from 'react-bootstrap'; // For "Add to Cart" button
import '../style.css';


export default function CardPage() {
  const { id } = useParams(); // Get the id from the URL
  const product = dior.find((item) => item.id === parseInt(id)); // Find the product by id
  const [query, setQuery]= useState("");
  if (!product) {
    return <div>Product not found</div>; // Handle case where product doesn't exist
  }

  const { Image, title, description, price } = product;

  return (
    
    <section className="card-page">
      
      <img src={Image} alt={title} className="card-img" />
      <div className="card-description">
        <h1 className="card-titlee">{title}</h1>
        <p>{description}</p>
        <h3>{price}$</h3>
        <Button>Add to Cart</Button>
      </div>
    </section>
  );
}
 
