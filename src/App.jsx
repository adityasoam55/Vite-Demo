import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import NavBar from './NavBar';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const path = window.location.pathname;
  const [cart, setCart] = useState({});
  console.log('cart is', cart);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    setCart({...cart, [productId]: oldCount + count});
  }

const totalCount = Object.keys(cart).reduce(function(previous, current){
  return previous + cart[current];
}, 0);

  return (
    <div className='h-screen relative' >
      <NavBar productCount={totalCount}/>
      <Routes>
        <Route index element={<ProductListPage />}></Route>
        <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;













// function hello() {
//   let x = 88;

//   function xyz() {
//     x = x + 1;                                         //closures concept
//     console.log('value of x is',x);
//   }
//   return xyz;
// }

// let a = hello();
// a();
// a();
// a();

