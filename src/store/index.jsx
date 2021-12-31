import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  sideNavSlice from './sideNavSlice';
import sideNavContentSlice from "./sideNavContentSlice";
import productsSlice from "./productsSlice";
const reducers = combineReducers({ sideNav: sideNavSlice ,sideNavContent:sideNavContentSlice,products:productsSlice});

const store = configureStore({ reducer: reducers });

export default store;