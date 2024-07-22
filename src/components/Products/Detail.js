import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/cart'; 
import products from '../../db/data'; 



const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = '/';
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity - 1 < 1 ? 1 : prevQuantity - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (detail.id) {
      dispatch(addToCart({
        productId: detail.id,
        quantity
      }));
    }
  };

  return (
    <div>
      <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.img} alt={detail.title} className='w-full' />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.title}</h1>
          <p className='font-bold text-3xl'>${detail.newPrice}</p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button 
                className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' 
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>
                {quantity}
              </span>
              <button 
                className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' 
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button 
              className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl' 
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
          <p className='font-semibold'>Company: {detail.company}</p>
          <p className='font-semibold'>Color: {detail.color}</p>
          <p className='font-semibold'>Category: {detail.category}</p>
     
        
        </div>
      </div>
    </div>
  );
};

export default Detail;
