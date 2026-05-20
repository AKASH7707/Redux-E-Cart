import { createSlice } from "@reduxjs/toolkit";

const WishList = createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers: {
        addToWishList:(state, argFromCmp) => {
            let existingProduct = state.wishlist.find(
                (eachProduct) => eachProduct.id == argFromCmp.payload.id
            )
            if(existingProduct){
                alert("Alredy Exist");
            }else{
                state.wishlist.push(argFromCmp.payload);
                alert("Added to Wishlist")
            }
        },
        removeFromWishList:(state, idFromCmp) => {
            let remainingProducts = state.wishlist.filter((eachProduct)=> eachProduct.id != idFromCmp.payload);
            state.wishlist = remainingProducts;
        }
    }
})

export const {addToWishList, removeFromWishList} = WishList.actions;
export default WishList.reducer