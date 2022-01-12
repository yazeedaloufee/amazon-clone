import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  sideNavSlice from './sideNavSlice';
import sideNavContentSlice from "./sideNavContentSlice";
import productsSlice from "./productsSlice";
import authSlice from "./authSlice"
import cartSlice from "./cartSlice"
const reducers = combineReducers({ sideNav: sideNavSlice ,sideNavContent:sideNavContentSlice,products:productsSlice,auth:authSlice,
    cart:cartSlice});

const store = configureStore({ reducer: reducers });

export default store;