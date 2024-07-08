import {createSlice} from '@reduxjs/toolkit';

let initialValue=0;
export const counterSlice =createSlice({
    name:"counter",
    initialState:{value:initialValue},
    reducers:{
        counting:(state,action)=>{
            state.value=action.payload;
        }
    }

});
export const {counting}=counterSlice.actions;
export default counterSlice.reducer;