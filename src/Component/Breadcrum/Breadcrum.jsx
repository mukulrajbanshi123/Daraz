import React from 'react'
import "./breadcrum.scss"
function Breadcrum(props) {
    let {product}=props;
    // console.log(product);
  return (
    <div className='breadcrum'>
       
        Home &#47; Categories&#47;{product.category}&#47;{product.title}
        
    </div>
  )
}

export default Breadcrum