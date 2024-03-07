import React from 'react'
import "./Scss/loginsignup.scss"
function LoginSignup() {
  return (
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Create Your Daraz Account</h1>
      <div className="login-fields d-flex mt-2 flex-column ">
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
      </div>
      <button className='btn btn-secondary my-2'>Continue</button>
      <p className='login'>Already have a account <span>Login Here</span></p>
      <div className="login-agree d-flex ">
        <input type="checkbox" />
        <p>By continuing, i agree  to terms of use and privacy policy.</p>
      </div>
    </div>
   </div>
  )
}

export default LoginSignup