import { createSlice } from "@reduxjs/toolkit";


const sideNavContentSlice=createSlice({
    name:'sideNavContent',
    initialState:[],
    reducers:{
        add(state,action){
            return action.payload
        }
    }
   
})

export default sideNavContentSlice.reducer;
export const {add}=sideNavContentSlice.actions;
export const get = ()=>{
   return async dispatch=>{
        const res = await fetch('https://amazon-navbar.herokuapp.com/fetch')
        const sideNavData= await res.json();
        dispatch(add(sideNavData))
    }
}