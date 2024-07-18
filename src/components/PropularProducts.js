import React from 'react';
import { Link } from 'react-router-dom';

const popularProductsData = [
  {
    id: '3432',
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail: 'https://images.unsplash.com/profile-1444840959767-6286d046f7f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64',
    product_price: '$1499.00',
    product_stock: 341,
  },
  {
    id: '7633',
    product_name: 'Samsung Galaxy Buds 2',
    product_thumbnail: 'https://images.unsplash.com/profile-1444840959767-6286d046f7f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64',
    product_price: '$399.00',
    product_stock: 24,
  },
  {
    id: '6534',
    product_name: 'Asus Zenbook Pro',
    product_thumbnail: 'https://images.unsplash.com/profile-1444840959767-6286d046f7f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64',
    product_price: '$899.00',
    product_stock: 56,
  },
  {
    id: '9234',
    product_name: 'LG Flex Canvas',
    product_thumbnail: 'https://images.unsplash.com/profile-1444840959767-6286d046f7f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64',
    product_price: '$499.00',
    product_stock: 98,
  },
  {
    id: '4314',
    product_name: 'Apple Magic Touchpad',
    product_thumbnail: 'https://images.unsplash.com/profile-1444840959767-6286d046f7f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64',
    product_price: '$699.00',
    product_stock: 0,
  },
  {
    id: '4342',
    product_name: 'Nothing Earbuds One',
    product_thumbnail: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
    product_price: '$399.00',
    product_stock: 453,
  },
];

export default function PopularProducts() {
  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className='text-gray-700 font-medium'>Popular Products</strong>
      <div className='mt-4 flex flex-col gap-3'>
        {popularProductsData.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className='flex hover:no-underline' >
            <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm overflow-hidden'>
              <img
                className="w-full h-full object-cover"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className='ml-4 flex-1'>
            <p className='text-sm text-gray-800'>{product.product_name}</p>
            <span
                className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}
            >
                {product.product_stock === 0 ? 'Out Of Stock' : `${product.product_stock} in stock`}
            </span>
            </div>

            <div className='text-xs text-gray-400 pl-2'>{product.product_price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
