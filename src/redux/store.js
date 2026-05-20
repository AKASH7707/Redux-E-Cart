import ProductSlice from './slices/ProductSlice';
import WishListSlice from './slices/WishlistSlice';
import CartSlice from './slices/CartSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        productReducer:ProductSlice,
        wishlistReducer:WishListSlice,
        cartReducer:CartSlice
    }
})

export default store;