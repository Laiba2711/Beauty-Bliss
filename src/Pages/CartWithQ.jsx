import React from 'react';
import { useCart } from './CartContext';
import { CiShoppingCart } from 'react-icons/ci';
import './Cart.css';

const CartWithQuantity = () => {
  const { totalQuantity } = useCart();

  return (
    <div className="cartt-container" >
      <CiShoppingCart className="cartt-icon" />
      {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
    </div>
  );
};

export default CartWithQuantity;
