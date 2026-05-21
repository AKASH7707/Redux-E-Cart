import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, emptyCart, reduceQuantity, removeCartItem } from '../redux/slices/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cartReducer);
  console.log(cart)
  return (
    <section className='mb-35'>
      {
        cart?.length > 0 ? <>
      <h2 className='text-red-700 text-5xl font-bold ps-36 py-8'>User Cart Summary</h2>
      <div className='grid grid-cols-3 px-20'>
        <div className='col-span-2'>
          <table  style={{
                    borderCollapse: "separate",
                    borderSpacing: "70px",
                    boxShadow:'0px 0px 15px 5px rgba(0, 0, 0, 0.2)'
                  }}>
            <thead className='font-bold'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th> Quantity </th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((eachProduct, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{eachProduct.title}</td>
                    <td style={{boxShadow:'0px 0px 15px 5px rgba(0, 0, 0, 0.2)'}} ><img style={{width:"100px"}} src={eachProduct?.thumbnail} alt="" /></td>
                    <td className='flex gap-2'>
                      <button className='hover:cursor-pointer text-6xl text-amber-500' disabled={eachProduct?.quantity == 1} onClick={() => dispatch(reduceQuantity(eachProduct.id))} >-</button>
                      <input className='w-10 text-center' type="text" placeholder={eachProduct?.quantity} />
                      <button className='hover:cursor-pointer text-5xl text-green-500' onClick={() => dispatch(addToCart(eachProduct))}>+</button>
                    </td>
                    <td>$ {eachProduct.price}</td>
                    <td>
                      <button onClick={() => dispatch(removeCartItem(eachProduct.id))} className='p-2 bg-red-500 rounded-3xl hover:cursor-pointer hover:bg-red-700 hover:text-white'>Remove</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      
        </div> 
        <div className='p-5 relative'>
          <div style={{boxShadow:'0px 0px 15px 5px rgba(0, 0, 0, 0.2)'}} className='grid items-center gap-2 p-9 fixed'>
            <h3 className='text-3xl font-semibold'>Total {cart.length} Items</h3>
            <h3 className='text-4xl font-semibold'>Total Amount: ${cart.reduce((acc, curr) => acc+curr.totalPrice, 0)}</h3>
            <hr />
            <button className='bg-green-500 p-2 hover:bg-green-700 hover:cursor-pointer'>CHECKOUT</button>
            <div className='flex justify-center mt-5'>
              <button onClick={() => dispatch(emptyCart())} className='bg-red-500 p-2 me-7 hover:cursor-pointer hover:bg-red-700 hover:text-white'>EMPTY CART</button>
              <Link to={'/'}  className='bg-blue-300 p-2 hover:cursor-pointer hover:text-white hover:bg-blue-800'>SHOP MORE</Link>
            </div>
          </div>
          {/* ms-20 mt-80 */}
        </div>
      </div> </> : <div className='flex justify-center items-center'>
            <div className='text-center'>
              <img  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="NothinInCart Image" />
              <h1 className='text-3xl font-bold text-purple-950 mb-8'>Your Cart is Empty</h1>
              <Link to={'/'} className='m-2 p-3 text-white bg-blue-700 hover:cursor-pointer hover:bg-blue-500'>Add more</Link>
            </div>
      </div>
      }
    </section>
  )
}

export default Cart