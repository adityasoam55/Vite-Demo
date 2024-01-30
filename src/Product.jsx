import React from 'react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

function Product({thumbnail, title, price, category, id}) {
  return (
    <div className="w-40 bg-white rounded-md p-1">

      <div className="w-full h-20">
        <img className="w-full h-full object-cover" src={thumbnail} />
      </div>
      <div className="text-xs text-gray-500">{category}</div>
      <div>{title}</div>
      <div className="text-xs text-blue-500">${price}</div>
      < Link to={"/products/" + id}  className='text-blue-500' >view details</Link>
    </div>
  );
}

export default Product;
