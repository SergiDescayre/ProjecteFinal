import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
  user: {},
  isLogin: false,
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setIsRegister: (state, action) => {
      state.isRegister = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isRegister = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const  {setIsRegister,setIsLogin,setAuthUser}  = authUserSlice.actions
