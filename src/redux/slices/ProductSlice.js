import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// should provide a prfixname = 'product/getData' 
export const getProductData = createAsyncThunk('product/getData', async () => {
    let result = await axios.get('https://dummyjson.com/products');
    // in result all the products are stored in products so we return it
    return result.data.products;
})

export const getSingleProductData = createAsyncThunk('product/getSingleData', async (id) => {
    let result = await axios.get(`https://dummyjson.com/products/${id}`);
    return result.data;
})

const ProductSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:true,
        error:'',
        single_products:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(getProductData.pending, (state)=>{
            state.products = [],
            state.loading = true,
            state.error = ''
        }),
        builder.addCase(getProductData.fulfilled, (state, apiResult)=>{
            state.products = apiResult.payload,
            state.loading = false,
            state.error = ''
        })
        builder.addCase(getProductData.rejected, (state)=>{
            state.products = [],
            state.loading = false,
            state.error = 'something went wrong'
        }),
        builder.addCase(getSingleProductData.pending, (state, result)=>{
            state.loading = true,
            state.error = '',
            state.single_products = {}
        }),
        builder.addCase(getSingleProductData.fulfilled, (state, result)=>{
            state.loading = false,
            state.error = '',
            state.single_products = result.payload
        }),
        builder.addCase(getSingleProductData.rejected, (state, result)=>{
            state.loading = true,
            state.error = 'Api Call Failed',
            state.single_products = {}
        })
    }
})

export default ProductSlice.reducer;