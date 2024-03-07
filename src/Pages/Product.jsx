import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import Productdetail from '../Component/Productdetails/Productdetail';

function Product() {
    const {pid}=useParams();
    const [products,setdata]=useState([""]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${pid}`)
        .then(res=>res.json())
        .then(json=>setdata(json))
    },[])
  //  var details={};
  //  details=products.find((x)=>x.id==pid)
    // console.log(products);
  return (
    <div>
      
       <Breadcrum product={products}/>
       <Productdetail product={products}/>
      
       
    </div>
  )
}

export default Product
