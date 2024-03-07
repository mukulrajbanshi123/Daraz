import React from 'react'
import "./productdetail.scss"
function Productdetail(props) {
    const {product}=props;
    console.log(product);
  return (
    <div className='product-display container-fluid'>
        <div className="row">
        <div className="display-left col-sm-12 col-lg-6">
           
            <div className="main-img">
                <img src={product.image} alt="" />
            </div>
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
           </div>
            
           </div> 
            <div className="display-right col-lg-6 col-sm-12">
                <h1>{product.title}</h1>
                <div className="star-icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>(122)</p>
                </div>
                <div className="product-price">
                    Rs.{product.price}
                </div>
                <div className="description">
                    {product.description}
                </div>
             <button className='btn btn-danger my-3 px-3'>ADD TO CART</button>
             <p className="category"><span>Category :</span>{product.category}</p>
             <p className="category"><span>Tags :</span>Morden, Latest</p>
            </div>

        
        </div>
    </div>
  )
}

export default Productdetail