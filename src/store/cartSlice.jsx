import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';

const initialState ={
    items:[],
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.items=[...state.items,action.payload]},
        removeFromCart:(state,action)=>{
            let index = state.items.findIndex((item)=>item.id===action.payload)
            let newCart = [...state.items]
            if(index>=0){
                newCart.splice(index,1)
            }else{
                console.warn(`Cannot remove product (id: ${action.payload.id}) as its not in cart`)
            }
            state.items=newCart;
        },
        addQuantity:(state,action)=>{
            const theItemIdx=state.items.findIndex((item)=>item.id===action.payload.id);
            const tempStateItems={...state}
            tempStateItems.items[theItemIdx].quantity=action.payload.quantity;

            // console.log(tempStateItems[theItemIdx],'inside sliceeeeeeeeeee' )
            // state.items=tempStateItems;
            // return tempStateItems;
        }
    }

})
export const {addToCart,removeFromCart,addQuantity}=basketSlice.actions;
export const selectTotal = (state)=>{
return state.cart.items.reduce((total,item)=>{
    console.log(item.price,item.quantity)
    return total+(item.price*item.quantity)},0).toFixed(2)}

export default basketSlice.reducer;
