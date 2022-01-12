import { Logout } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: {},
        loggedIn: false,
        token: "",
    },
    reducers: {
        login(state, action) {
            // state.token = action.payload.token;
            // state.user = action.payload.user;
            // state.loggedIn=true;
            return {
                user: action.payload.user,
                loggedIn: true,
                token: action.payload.token,
            };
        },
        keepMeLoggedIn(state, action) {
            return { ...state, user: action.payload.user, loggedIn: true };
        },
        logout(state, action) {
            return {
                user: {},
                loggedIn: false,
                token: "",
            };
        },
    },
});

export default authSlice.reducer;

export const { login, keepMeLoggedIn, logout } = authSlice.actions;
// we need to create a slice to keep the user data

export const signin = (username, password) => {
    return async (dispatch) => {
        const authbasic = `Basic ${btoa(`${username}:${password}`)}`;
        // const res = await axios.post(`${process.env.REACT_APP_AUTHENTICATION_SERVER_LINK}signin`
        const link = `${process.env.REACT_APP_AUTHENTICATION_SERVER_LINK}/signin`;
        // const  res = await axios.post(`http://localhost:3004/signin`
        const res = await axios.post(
            link,
            {},
            { headers: { authorization: authbasic } }
        );
        // const loginData=await res;
        dispatch(login(res.data));
    };
};
export const signup = (username, password) => {
    return async (dispatch) => {
        const body = { username: username, password: password };
        const link = `${process.env.REACT_APP_AUTHENTICATION_SERVER_LINK}/signup`;
        const res = await axios.post(link, body);
        // const loginData=await res;
        // dispatch(login(res.data));
        dispatch(login(res.data));
    };
};
export const signedIn = (token) => {
    return async (dispatch) => {
        const authBearer = `Bearer ${token}`;
        const link = `${process.env.REACT_APP_AUTHENTICATION_SERVER_LINK}/user`;
        const res = await axios.get(link, {
            headers: { authorization: authBearer },
        });
        dispatch(keepMeLoggedIn(res.data));
    };
};
