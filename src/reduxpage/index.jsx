import {createSlice,configureStore} from "@reduxjs/toolkit"

const data=[]

const userslice=createSlice({
    name:"user",
    initialState:data,
    reducers:{
        add:(state,action)=>{
            return [...state,action.payload]
        }
    }
})

const store= configureStore({
    reducer:{
        user:userslice.reducer
    }
})

export const {add}=userslice.actions
export default store;