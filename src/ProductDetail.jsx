import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProductData } from './api';
import Loading from './Loading';


function ProductDetail({ onAddToCart }) {
    const id = +useParams().id;
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState();
    const [count, setCount] = useState(1);

    useEffect(function () {
        const p = getProductData(id)

        p.then(function (product) {
            setProduct(product);
        }).catch(function (error) {
            setLoading(false);
        });
    }, [id])

    function handleCountChange(event) {
        setCount(+event.target.value)
    }

    function handleButtonClick() {
        onAddToCart(id, count)
    }

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <div className='text-center'>Error, no Data found...</div>
    }

    return (
        <div className='h-screen flex flex-col items-center justify-center pb-12'>
            <div className="w-3/5 h-3/5 m-2 p-2 bg-white flex">
                <div className='w-4/5 h-full'>
                    <img className='w-full h-full' src={product.thumbnail} />
                </div>

                <div className='mx-6 my-4'>
                    <div className='text-black font-medium text-3xl'>{product.title}</div>
                    <h3 className="text-sm mt-2 mb-1 font-medium" >${product.price}</h3>
                    <div className='text-black text-sm'>{product.description}</div>
                    <input value={count} onChange={handleCountChange} className="border w-10  rounded-md text-center mt-3" type="number" />
                    <button onClick={handleButtonClick} className="mx-1 mb-3 rounded-md px-5 py-0.5 bg-red-500 text-white" >Add to cart</button>
                    <hr class="h-px my-1 border-0 dark:bg-red-400"></hr>
                    <div className='text-black'>category:
                        <span className='text-red-400'> {product.category}</span>
                    </div>

                    <div className='flex justify-evenly mt-4'>
                        <div>
                            {id > 1 && <Link to={"/products/" + (id - 1)} className='m-5 text-blue-700'>Previous</Link>}
                        </div>

                        <div>
                            {id < 100 && <Link to={"/products/" + (id + 1)} className='m-5 text-blue-700'>Next</Link>}
                        </div>
                    </div>
                </div>

                <Link to="/" className='m-2 text-blue-700'>Back</Link>

            </div>

        </div>
    );
}

export default ProductDetail;