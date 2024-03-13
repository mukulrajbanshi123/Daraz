import React, {  useEffect, useState } from 'react'
import "./card.scss"
import { useParams,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addtocart } from '../../Redux/CartSlice';

function Card(props) {
    // const addCartItems=useContext(ShopContext);
    const [data,setdata]=useState([""]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setdata(json))
    },[])
   let cat = data.filter((x) => x.category == props.categories)
   const dispatch= useDispatch()
  //  console.log(cat)
  return (
    <>
    
    <div className="container-fluid ">
        <div className="row d-flex justify-content-left  ">
            
        {cat.map((x)=>
        // <div className="col-lg-3 col-md-4 col-sm-6">
     <div className="card col-lg-3 col-md-4 col-sm-6 m-2" style={{width: '18rem'}}>
      <Link to={`/product/${x.id}`}>
  <img src={x.image} className="card-img-top " alt="..."/></Link>
  <div className="card-body">
    <h5 className="card-title ">{x.title.substring(0,40)}...</h5>
    <span><p className="card-text d-flex price">Rs.{x.price}</p></span>
    <p className='card-text d-flex rating '><span>Rating:{x.rating.rate}</span> <span className='ms-auto'>{x.rating.count}</span></p>
   
    <div className="btn btn-primary mx-2 " onClick={()=>dispatch(addtocart({id:x.id,price:x.price,title:x.title,image:x.image}))} >Add to Cart</div>
  </div>
  
   </div>
//    </div>
)}

</div>
</div>
    </>
  )
}

export default Card