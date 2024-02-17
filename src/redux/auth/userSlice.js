import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser=createAsyncThunk(
    'token/loginUser',
    async(userLogin)=>{
        const request = await axios.post("http://localhost:3001/api/v1/user/login", userLogin);
        const response = await request.data.body.token;
        localStorage.setItem('token', response)
       // console.log(response)
        return response;
    }
)



const userSlice = createSlice({

    name: 'user',
    initialState:{
        loading: false,
        token: null,
        error: null
    },
    reducers: {
        logOut: (state, action) => {
            state.token = null ;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true ;
            state.token = null ;
            state.error = null ;
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false ;
            state.token = action.payload ;
            state.error = null ;
        })
        .addCase(loginUser.rejected,(state, action)=>{
            state.loading = false ;
            state.token = null ;
           // console.log(action.error.message)
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