import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProductData } from '../redux/slices/ProductSlice';
import { addToWishList } from '../redux/slices/WishlistSlice';
import { addToCart } from '../redux/slices/CartSlice';

const SingleProduct = () => {
    let {id} = useParams();
    
    let dispatch = useDispatch()

    const {single_products} = useSelector((state) => state.productReducer)

    let reviews = single_products.reviews;
    useEffect(()=>{
        dispatch(getSingleProductData(id))
    },[id])

  return (
    <section className='grid grid-cols-2 px-20 h-full justify-center items-center'>
        <div className='flex flex-col justify-center h-130 items-center gap-15'>
            <img className='w-100' src={single_products?.thumbnail} alt="product Image" />
            <div >
                <button onClick={()=>{
                    dispatch(addToWishList(single_products))
                }} className='bg-blue-600 text-white p-2 mr-25 hover:bg-blue-900 hover:cursor-pointer'>ADD TO WISHLIST</button>
                <button onClick={() => dispatch(addToCart(single_products))} className='bg-green-600 text-white p-2 hover:bg-green-900 hover:cursor-pointer'>ADD TO CART</button>
            </div>
        </div> 
        <div className='p-3 grid gap-3'>
            <h1 className='text-5xl'>{single_products?.title}</h1>
            <h2 className='text-4xl text-red-600'>$ {single_products?.price}</h2>
            <h3 className='text-2xl font-semibold'>Brand: {single_products?.brand}</h3>
            <h3 className='text-2xl font-semibold'>Category: {single_products?.category}</h3>
            <p><span className='text-2xl font-semibold'>Descritption :</span> {single_products?.description}</p>
            <h3 className='text-2xl font-semibold'>Client Reviews</h3>
            {
                reviews?.length>0 && <div className='grid gap-4'>
                {
                    reviews?.map((eachReview)=>(
                    <div className='shadow-2xl shadow-black p-3'>
                    <h4><span className='text-1xl font-semibold'>{eachReview.reviewerName} :</span> {eachReview.comment}</h4>
                    <h6>Rating : {eachReview.rating}</h6>
                </div>
                ))
                }
                
            </div>
            }
        </div>
    </section>
  )
}

export default SingleProduct