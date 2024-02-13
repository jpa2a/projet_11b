import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useDispatch } from "react-redux";


export const profileUser=createAsyncThunk(
    'profileUser',
    async(token)=>{
        const request = await axios.post("http://localhost:3001/api/v1/user/profile", null,{ headers: {"Authorization": "Bearer " + token },});
        const response = await request.data.body;
       // const dispatch = useDispatch();
      /*   dispatch({
            type: "profile/edit",
          }) */

     //   const responseJSON = JSON.stringify(response)
        return response;
    }
)

 const initialState = {
        id: null,
        email: null,
        firstName: null,
        lastName: null, 
        updatedAt: null,
        userName: null,
        createdAt: null
  }
   
const profileSlice = createSlice({

    name: 'profile',
    initialState,
    reducers: {
        edit: (state, action) => {
            state.id = action.payload.id ;
            state.email = action.payload.email ;
            state.firstName = action.payload.firstName ; 
            state.lastName = action.payload.lastName;
            state.updatedAt = action.payload.updatedAt;
            state.createdAt = action.payload.createdAt;
            state.userName = action.payload.userName;
            
          // console.log(action.payload)
        },
        logOut: () => initialState,
    }
})

export default profileSlice.reducer;