import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  sideNavSlice from './sideNavSlice';

const reducers = combineReducers({ sideNav: sideNavSlice });

const store = configureStore({ reducer: reducers });

export default store;