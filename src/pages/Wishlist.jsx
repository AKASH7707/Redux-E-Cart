import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../redux/slices/WishlistSlice';
import { addToCart } from '../redux/slices/CartSlice';

const Wishlist = () => {

  const dispatch = useDispatch();

  const {wishlist} = useSelector((state) => state.wishlistReducer);
  return (
    <section className='min-h-[80vh] h-auto'>
      <h1 className='p-5 text-center text-5xl font-bold text-purple-600'>Wishlist</h1>
      <div className='grid grid-cols-4 text-center p-5 gap-9'>
        {
          wishlist.map((eachProduct) => (
            <div style={{boxShadow:'0px 0px 15px 5px rgba(0, 0, 0, 0.2)'}} className='grid gap-2 justify-center p-3'>
              <img src={eachProduct.thumbnail} alt="Product image" />
              <div className='flex justify-between'>
                  <h3 className='text-blue-600'>{eachProduct.category}</h3>
                  <h3 className='font-bold'>{eachProduct.price}</h3>
              </div>
              <h3>{eachProduct.title}</h3>
              <div className='flex justify-between'>
                <button onClick={() => dispatch(addToCart(eachProduct))} className='bg-green-600 text-white p-2 hover:bg-green-700 hover:cursor-pointer' >Add To Cart</button>
                <button onClick={() => dispatch(removeFromWishList(eachProduct.id))} className='bg-red-600 text-white p-2 hover:bg-red-700 hover:cursor-pointer' >Remove</button>
              </div>

          </div>
          ))
        }
      </div>
      
    </section>
  )
}

export default Wishlist