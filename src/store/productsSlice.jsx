import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name:'productsSlice',
    initialState:[],
    reducers:{
        add(state,action){
            return action.payload;
        }
    }
});

export default productsSlice.reducer;

export const {add}=productsSlice.actions;
export const get = ()=>{
    return async dispatch =>{
        const res = await fetch('https://fakestoreapi.com/products')
        const productsData=await res.json();
        dispatch(add(productsData));
    }

}
//we need to add the slice to the store...use the data in the compoenent 