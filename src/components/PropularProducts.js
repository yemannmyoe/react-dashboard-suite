import React from 'react';
import { Link } from 'react-router-dom';

const popularProductsData = [
  {
    id: '3432',
    product_name: 'Nike Air Monarch IV"',
    product_thumbnail: 'https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg',
    product_price: '$140.00',
    product_stock: 341,
  },
  {
    id: '7633',
    product_name: 'Nike Air Vapormax Plus',
    product_thumbnail: 'https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg',
    product_price: '$140.00',
    product_stock: 24,
  },
  {
    id: '6534',
    product_name: 'Wedding Prom Bridal',
    product_thumbnail: 'https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg',
    product_price: '$140,00',
    product_stock: 56,
  },
  {
    id: '9234',
    product_name: 'Unisex-Adult Super',
    product_thumbnail: 'https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg',
    product_price: '$499.00',
    product_stock: 98,
  },
  {
    id: '4314',
    product_name: "Nike Men's Sneaker",
    product_thumbnail: 'https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg',
    product_price: '$699.00',
    product_stock: 0,
  },
  {
    id: '4342',
    product_name: 'PUMA BLACK-OCE',
    product_thumbnail: 'https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg',
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
