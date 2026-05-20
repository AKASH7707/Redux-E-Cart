import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductData, getSingleProductData } from '../redux/slices/ProductSlice';
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { addToWishList } from '../redux/slices/WishlistSlice';
import { addToCart } from '../redux/slices/CartSlice';

const Home = () => {
    const dispatch = useDispatch();

    const {products, loading, error} = useSelector((state) => state.productReducer)
    // const {single_products} = useSelector((state) => state.productReducer)
    // console.log(products, loading, error)

    useEffect(()=>{
        dispatch(getProductData());
    },[])

  return (
    <section>
        {
            products?.length > 0 ? <div className='grid grid-cols-4 text-center p-5 gap-9'>
            {
                products.map((eachProduct) => (
                    <div style={{boxShadow:'0px 0px 15px 5px rgba(0, 0, 0, 0.2)'}} className='grid gap-2 justify-center p-3'>
                        
                        <img src={eachProduct.thumbnail} alt="Product image" />
                        <div className='flex justify-between'>
                            <button onClick={() => {
                                // dispatch(getSingleProductData(eachProduct.id));
                                dispatch(addToWishList(eachProduct));
                            }}><FiHeart className='text-red-600 text-2xl' /></button>
                            <button onClick={() => {
                                // dispatch(getSingleProductData(eachProduct.id));
                                dispatch(addToCart(eachProduct));
                            }}><FaCartPlus className='text-green-600 text-2xl' /></button>
                        </div>
                        <div className='flex justify-between'>
                            <h3 className='text-blue-600'>{eachProduct.category}</h3>
                            <h3 className='font-bold'>{eachProduct.price}</h3>
                        </div>
                        <h3>{eachProduct.title}</h3>
                        
                        <Link className='bg-purple-600 text-white p-2' to={`/singleProduct/${eachProduct.id}`} >View More...</Link>
                    </div>
                ))
            }
        </div> : <h1>{error}</h1>
        }
    </section>
  )
}

export default Home