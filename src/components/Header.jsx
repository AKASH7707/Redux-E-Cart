import React, { useEffect } from 'react';
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTruckFast } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const Header = () => {

    const {cart} = useSelector((state) => state.cartReducer);
    const {wishlist} = useSelector((state) => state.wishlistReducer);

    console.log(cart)
  return (
    <header className='py-5 px-20 bg-purple-800 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <FaTruckFast className='text-3xl text-white' />
            <Link to={'/'}><p className='text-3xl text-white font-bold'>E-cart</p></Link>
        </div>

        <div>
            <nav className='flex gap-5'>
                <input className='px-3 py-1 bg-white' placeholder='Search Products Here!!!' type="text" />
                
                <ul className='flex gap-3 text-white font-bold'>
                    <li><FiHeart className='text-red-600 text-2xl' /></li>
                    <li><Link to={'/wishlist'}>Wishlist</Link><span className='bg-blue-50/30 px-2 py-1 ml-1 rounded-full '>{wishlist.length ? wishlist.length: 0}</span></li>
                    <li><FaCartPlus className='text-green-600 text-2xl' /></li>
                    <li><Link to={'/cart'} >Cart</Link><span className='bg-blue-50/30 px-2 py-1 ml-1 rounded-full '>{cart.length ? cart.length : 0}</span></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header