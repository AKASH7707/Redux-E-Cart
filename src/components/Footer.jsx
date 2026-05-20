import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaArrowRightLong, FaTruckFast, FaXTwitter } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { TbMail } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className='px-20 grid p-15 bg-purple-800 grid-cols-5 text-white'>
        <div className='col-span-2 grid grid-cols-1 gap-3'>
            <div className='flex gap-2 items-center'>
                <FaTruckFast className='text-3xl text-white' />
                <p className='text-3xl text-white font-bold'>E-cart</p>
            </div>
            <p>Designed and built with all the love in the world by the <br/> Luminar team with the help of our countributors.</p>
            <p>Code Licensed Luminar, docs CC BY 3.0.</p>
            <p>Currentlly v5.3.2</p>
        </div>
        <div >
            <h4 className='text-3xl font-semibold'>Links</h4>
            <ul>
                <li>Home</li>
                <li>Wishlist</li>
                <li>Cart</li>
            </ul>
        </div>
        <div >
            <h4 className='text-3xl font-semibold'>Guides</h4>
            <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Router</li>
            </ul>
        </div>
        <div >
            <h4 className='text-3xl font-semibold'>Contact US</h4>
            <ul className='mt-3'>
                <li className='flex gap-5'>
                    <input className='p-2 bg-white text-black' type="text" placeholder='Email Here!!' />
                    <span className='mt-3'><FaArrowRightLong/></span>
                </li>
                <li className='flex justify-between mt-5'>
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaWhatsapp />
                    <FaInstagram />
                    <TbMail />
                    <IoCall />
                </li>
                
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer