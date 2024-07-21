import React from 'react';
import './Recommended.css';
import Button from '../Button';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

function Recommended({ handleClick, cartCount }) {
  return (
    <div>
      <div className="recommended-container">
        <h2 className="recommended-title">Recommended</h2>
        <div className="shopping-cart">
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
    </div>
  );
}

export default Recommended;
