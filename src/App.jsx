import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import NavBar from './NavBar';
import Footer from './Footer';
import { useState } from 'react';
import Cart from './Cart';
import Account from './Account';

function App() {
  const path = window.location.pathname;
  const [cart, setCart] = useState({});
  console.log('cart is', cart);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    setCart({ ...cart, [productId]: oldCount + count });
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className='h-screen relative flex flex-col' >
      <NavBar productCount={totalCount} />
      <Routes className=" grow ">
        <Route index element={<ProductListPage />}></Route>
        <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />}></Route>
        <Route path='/cart/' element={<Cart />}></Route>
        <Route path='/account/' element={<Account />}></Route>
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

