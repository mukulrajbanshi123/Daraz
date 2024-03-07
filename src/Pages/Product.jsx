import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum/Breadcrum';

function Product() {
    const {pid}=useParams();
    const [products,setdata]=useState([""]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setdata(json))
    },[])
   var details=products.find((x)=>x.id==pid)
    console.log(details);
  return (
    <div>
      
       {/* <Breadcrum product={details}/> */}
       Problem
       <img src="" alt="" />
    </div>
  )
}

export default Product
