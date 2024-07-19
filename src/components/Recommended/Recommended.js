import React from 'react';
import './Recommended.css';
import Button from '../Button';

function Recommended({ handleClick }) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
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
