import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromcart } from '../Redux/CartSlice'
import "./Scss/cart.scss"
function Cart() {
  const cartItems = useSelector(state => state.cart.cart)
  // console.log(cartItems)
  const dispatch = useDispatch();
  return (

    <div>
     <span className='text-center'> <h2 className='p-4'>Cart Items</h2></span>
      <div className="list  ">
        <ul>
          <li>Products</li>
          <li>Title</li>
          <li>Price</li>
         
          <li>Remove</li>
        </ul>

      </div>
      <hr />
      {
        cartItems.map((x)=>
        <div className="items ">
        <img src={x.image} alt="" />
        <div className="title">{x.title}</div>
        <div className='price'>{x.price}</div>
        <i onClick={() => dispatch(removefromcart({id: x.id}))} class="fa-solid fa-trash"></i>
        </div>
    
      )}
    </div>
      
  )
}

export default Cart