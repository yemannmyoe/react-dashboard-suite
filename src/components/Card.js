import { AiFillStar } from 'react-icons/ai';
import { BsBagHeartFill } from 'react-icons/bs';
import React from 'react';

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className='card'>
      <img src={img} alt={title} className='card-img' />
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-reviews'>
        {star} {star} {star} {star} 
      
          <span className='total-reviews'>{reviews}</span>
        </section>
        <section className='card-price'> 
          <div className='price'>
            {prevPrice && <del>${prevPrice}</del>} ${newPrice}
          </div>
          <div className='bag'>
            <BsBagHeartFill className='bag-icon' />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
