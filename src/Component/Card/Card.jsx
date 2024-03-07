import React, { useEffect, useState } from 'react'
import "./card.scss"
import { useParams,Link } from 'react-router-dom'


function Card(props) {
    
    const [data,setdata]=useState([""]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setdata(json))
    },[])
   let cat = data.filter((x) => x.category == props.categories)
  //  console.log(cat)
  return (
    <>
    
    <div className="container-fluid ">
        <div className="row d-flex justify-content-left  ">
            
        {cat.map((x)=>
        // <div className="col-lg-3 col-md-4 col-sm-6">
     <div className="card col-lg-3 col-md-4 col-sm-6 m-2" style={{width: '18rem'}}>
      <Link to={`/product/${x.id}`}>
  <img onClick={window.scrollTo(0,0)} src={x.image} className="card-img-top " alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title ">{x.title.substring(0,40)}...</h5>
    <span><p className="card-text d-flex price">Rs.{x.price}</p></span>
    <p className='card-text d-flex rating '><span>Rating:{x.rating.rate}</span> <span className='ms-auto'>{x.rating.count}</span></p>
   
    <a href="#" className="btn btn-primary mx-2 ">Add to Cart</a>
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