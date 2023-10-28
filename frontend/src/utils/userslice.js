import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:"user",
    initialState:{
        name:"",
        token:"",
    },
    reducers:{
        storeToken:(state,action)=>{
            state.token=action.payload;
        }
    }
})

export const {storeToken} =userslice.actions;

export default userslice.reducer;