import React from 'react';
import Product from './Product';

function ProductList({ products }) {
    return (
        <div className='w-3/4 flex flex-wrap justify-center gap-3 m-auto px-10'>

            {products.map(function (item) {
                return (
                    <Product
                        key={item.title}
                        {...item}
                    />
                );
            })}

        </div>
    );
}

export default ProductList;