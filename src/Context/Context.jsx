import React,{createContext, useEffect, useState} from "react";
import { Value } from "sass";

 const getDefaultCart =()=>{
    const [data,setdata]=useState([""]);
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(json=>setdata(json))
    },[])
    let cart={};
    // console.log(data.length+1)
    for (let index = 0; index < data.length+1; index++) {
        // const element = array[index];
        cart[index]=0;
    }
    // console.log(cart)
    return cart;

}
export const  ShopContext =createContext(null);
  const ShopContextProvider =(props)=>{
    // console.log(getDefaultCart());
     const [cartItems,setCart]=useState(getDefaultCart());
     
    //  console.log(cartItems);
    const addCartItems =()=>{
        setCart((prev)=>({...prev,[id]:prev[id]+1}))
    }
    const removeCartItems =()=>{
        setCart((prev)=>({...prev,[id]:prev[id]-1}))
    }
    const ContextValue = {cartItems,addCartItems,removeCartItems};
     return(
        <ShopContext.Provider Value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
       
     )
  }
  export default ShopContextProvider