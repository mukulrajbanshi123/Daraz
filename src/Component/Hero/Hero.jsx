import React from 'react'
import "./hero.scss"
function Hero() {
  return (
    <div className='hero'> 
<div id="carouselExampleIndicators " className="carousel  slide " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item  active">
      <img src="https://icms-image.slatic.net/images/ims-web/a3c39060-0358-4c21-bbdc-139701dd40a6.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img src="https://icms-image.slatic.net/images/ims-web/da3a10d0-53d7-4515-aeb6-35641010e506.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img src="https://icms-image.slatic.net/images/ims-web/277fdf05-2f4f-40b9-b0fa-8e84225c1075.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img src="https://icms-image.slatic.net/images/ims-web/383f55bc-cf7f-4cee-89aa-43ce77838c37.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className="img  my-4 justify-content-center">
    <img src="../src/assets/darazshop.png" alt="" className="img-fluid al" />
  </div>

    </div>
  )
}

export default Hero