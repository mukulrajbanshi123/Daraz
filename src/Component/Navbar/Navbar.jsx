import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';
function Navbar() {
  const [cat,setcat]=useState([""]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(cat=>setcat(cat))
  },[])
  // console.log(cat);
  return (
    <div className='navbar'>
       <div className='nav-logo'>
        <Link to={"/"}><img src="../src/assets/darazlogo.png" alt="" /></Link>
       </div>
       <div className='nav-menu'>
        <div className='cat'><span>Catogries</span> 
                <ul>
                  {cat.map((x)=>
                  <li><Link className='cat' to={`/categories/${x}`}>{x}</Link></li>
                  )}
                </ul>
        
                </div>
         </div>
       <div className="search">

        <input type="text" placeholder='Search in Daraz'/>
        <i className="fa-solid fa-magnifying-glass"></i>
       </div>
       <div className="login-signup">
        <Link to="/loginsignup">
       <i className="fa-solid fa-user"></i> &nbsp;
        <span>Login</span> &nbsp; | &nbsp; <span>Signup</span>
        </Link>
       </div>
       <div className="cart"><Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i>
       <div className="cart-count">0</div></Link>
              </div>
    </div>
  )
}

export default Navbar