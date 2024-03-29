import React from 'react';
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function NavBar({ productCount }) {
    return (
        <div className='flex gap-5 justify-end w-full bg-black items-center px-4 py-2 sticky'>
            <nav nav className='text-white flex items-center gap-4' >
                <Link to="/" className='px-3 font-bold'>Home</Link>
                <a className='px-3 font-bold' href=''>Category</a>
                <a className='px-3 font-bold' href=''>Offers</a>
                <a className='px-3 font-bold' href=''>Account</a>
            </nav >
            < Link to={"/cart/"} className='text-blue-500' ><IoBagOutline className='text-white relative text-4xl z-10' />
            </Link>
            <div className='text-white absolute right-7 top-5 '>{productCount}</div>
        </div>

    );
}

export default NavBar;