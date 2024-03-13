import React from 'react'
import "./newletter.scss"
function Newsletter() {
  return (
    <>
      <div className="newsletter d-flex flex-column flex-warp">
        <h1>Get Exclusive Deals On Your Email</h1>
        <p>Subscribe To Our Newsletter and Stay Updated</p>
      
          <div className='email'>
          <input type="email" placeholder='Your email id' />
           <button>Subscribe</button>
         </div>
      </div>
    </>
  )
}

export default Newsletter
