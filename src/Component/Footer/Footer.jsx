import React from 'react'
import "./footer.scss"
function Footer() {
  return (
    <div className='footer'>
        <div className="logo">
        <img src="../src/assets/darazlogo.png" alt=""  />
        </div>
        <div className='list'>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
  <div className="icon">
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-pinterest"></i>
  <i class="fa-brands fa-whatsapp"></i>
  <i class="fa-brands fa-twitter"></i>
  </div>

        <p>Copyright @ 2024 - All Right Reserved</p>
    </div>
  )
}

export default Footer