import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App