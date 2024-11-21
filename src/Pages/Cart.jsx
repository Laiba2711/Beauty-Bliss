import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useCart();
 

  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to your cart before placing an order.');
      return;
    }
    alert(`Order placed successfully! Your total is $${totalCartPrice.toFixed(2)}.`);
    navigate('/card'); 
  };

  return (
    <div id="cartPage">
      <h2>𝑩𝑩 𝑪𝒂𝒓𝒕</h2>
      <div id="cartContainer">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.Image} alt={product.title} width="50" height="50" />
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>
                  -
                </button>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value, 10))
                  }
                  min="1"
                />
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>
                  +
                </button>
              </div>
              <p >Total: ${(product.price * product.quantity).toFixed(2)}</p>
              <button className='removeFcart' onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <h3>Total Price: ${totalCartPrice.toFixed(2)}</h3>
      <div className="cart-actions">
        <button onClick={() => navigate('/')}>Back to Products</button>
        <button onClick={placeOrder} className="place-order-button">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
