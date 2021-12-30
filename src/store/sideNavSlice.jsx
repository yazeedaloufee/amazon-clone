import { createSlice } from "@reduxjs/toolkit";


const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState: false,
    reducers: {
        open(state, action) { 
            
            return true},
        close(state, action) {
            return false
        },
    }
});


export default sideNavSlice.reducer;

export const { open, close } = sideNavSlice.actions;

