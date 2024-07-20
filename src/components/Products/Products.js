import React from 'react';
import './Product.css';
import Recommended from '../Recommended/Recommended';
import Price from './Price/Price';
import Card from '../Card'; 

export default function Products({ result, handleChange, handleClick }) {
  return (
    
    <div className="h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-4 p-4">
      <div>
        <Recommended handleClick={handleClick} />
      </div>
      
      <div className='main-content'>
        <div className='price-container'>
          <Price handleChange={handleChange} />
        </div>
        
        <section className='card-container'>
          {result.map(product => (
            <Card
              key={product.id}
              img={product.img}
              title={product.title}
              star={product.star}
              reviews={product.reviews}
              prevPrice={product.prevPrice}
              newPrice={product.newPrice}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
