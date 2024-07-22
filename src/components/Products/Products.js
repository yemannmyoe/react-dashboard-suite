import './Product.css';
import Recommended from '../Recommended/Recommended';
import Price from './Price/Price';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart as addToCartAction } from '../../stores/cart';

export default function Products({ result, handleChange, handleClick }) {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.items);

  const addToCart = (product) => {
    dispatch(addToCartAction({ productId: product.id, quantity: 1 }));
  };

  const cartCount = carts.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto flex flex-col gap-4 p-4">
      <div>
        <Recommended handleClick={handleClick} cartCount={cartCount} />
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
              addToCart={() => addToCart(product)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
