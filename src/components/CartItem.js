import React, { useState, useEffect } from 'react';
import products from '../db/data'; 
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import './CartItem.css'; // Ensure this file exists for custom styles

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    if (quantity > 0) {
      dispatch(changeQuantity({
        productId,
        quantity: quantity - 1
      }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId,
      quantity: quantity + 1
    }));
  };

  if (!detail) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='cart-item'>
      <img src={detail.img} alt={detail.title} className='cart-item-img' />
      <p className='cart-item-title'>{detail.title}</p>
      <p className='cart-item-price'>${detail.newPrice * quantity}</p>
      <div className='cart-item-controls'>
        <button className='quantity-button' onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button className='quantity-button' onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
