import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser=createAsyncThunk(
    'user/loginUser',
    async(userLogin)=>{
        const request = await axios.post("http://localhost:3001/api/v1/user/login", userLogin);
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response))
        console.log(response)
        return response;
    }
)

const userSlice = createSlice({

    name: 'user',
    initialState:{
        loading: false,
        user: null,
        error: null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true ;
            state.user = null ;
            state.error = null ;
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false ;
            state.user = action.payload ;
            state.error = null ;
        })
        .addCase(loginUser.rejected,(state, action)=>{
            state.loading = false ;
            state.user = null ;
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 400'){
                state.error = 'erreur ! mauvais email ou mot de passe';
            }
            else{
                state.error = action.error.message;
            }
            
        })
    }
})

export default userSlice.reducer;