import React from 'react';
import './Recommended.css';
import Button from '../Button';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import CartTab from '../CartTab';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../../stores/cart';

function Recommended({ handleClick, cartCount }) {
  const dispatch = useDispatch();
  const statusTabCart = useSelector(store => store.cart.statusTab);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className={`main-container ${statusTabCart ? "shift-left" : ""}`}>
      <div className="recommended-container">
        <h2 className="recommended-title">Recommended</h2>
        
        <div className="shopping-cart" onClick={handleOpenTabCart}>
          <HiOutlineShoppingCart />
          <span className='count'>{cartCount}</span>
        </div>
      </div>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} className="btns" value="" title="All" />
        <Button onClickHandler={handleClick} className="btns" value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} className="btns" value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} className="btns" value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} className="btns" value="Vans" title="Vans" />
      </div>
      <CartTab />
    </div>
  );
}

export default Recommended;
