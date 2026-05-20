import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, argFromCmp) => {
            let existingProduct = state.cart.find(
                (eachProduct) => eachProduct.id == argFromCmp.payload.id
            );
            if(existingProduct){
                existingProduct.quantity += 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                let remainingProducts = state.cart.filter((eachProduct) => eachProduct.id != argFromCmp.payload.id);
                remainingProducts.push(existingProduct);
                state.cart = remainingProducts;
                alert("Product Quantity incremented in Cart");
            }else{
                state.cart.push({...argFromCmp.payload, quantity:1, totalPrice: argFromCmp.payload.price});
                alert("Added to Cart");
            }
        },
        reduceQuantity:(state, idFromCmp) => {
            let existingProduct = state.cart.find((eachProduct) => eachProduct.id == idFromCmp.payload);
            if(existingProduct){
                existingProduct.quantity -= 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                alert('quantity reduced from cart');

                // if(existingProduct.quantity == 0){
                //     let remainingProducts = state.cart.filter((eachProduct) => eachProduct.id != idFromCmp.payload);
                //     state.cart = remainingProducts;
                //     alert("product removed from cart")
                // }
            }
            // else{
            //     alert('The product is not found in Cart');
            // }
        },
        removeCartItem: (state, idFromCmp) => {
            let remainingProducts = state.cart.filter((eachCartItem) => eachCartItem.id != idFromCmp.payload);
            state.cart = remainingProducts;
        },
        emptyCart : (state) => {
            state.cart = [];
        }
    }
})

export const {addToCart, reduceQuantity, removeCartItem, emptyCart} = CartSlice.actions;
export default CartSlice.reducer