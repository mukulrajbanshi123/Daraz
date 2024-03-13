import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart: []
    },
    reducers:{
       addtocart: (state,action)=>{
        state.cart.push(action.payload)
        // console.log(state.cart)
       },
       removefromcart: (state,action)=>{
        // console.log(state.cart)
        state.cart = state.cart.filter(x => x.id !== action.payload.id)
       }
    }
})
 export default cartSlice.reducer;
 export const {addtocart,removefromcart} = cartSlice.actions;