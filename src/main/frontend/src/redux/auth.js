import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        responseData: {},
        ID: '',
        isLoggedIn: false,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        setResponseData: (state, action) => {
            state.responseData = action.payload;
        },
        setID: (state, action) => {
            state.ID = action.payload;
        },
        logOut: (state, action) => {
            state.ID = '';
            state.token = '';
            state.isLoggedIn = false;
        },
    },
});

export const { setToken, setResponseData, setID,logOut } = authSlice.actions;

export default authSlice.reducer;
