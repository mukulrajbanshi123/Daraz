import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
// import Product from './Pages/Product'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categories/:cname' element={<Categories/>}/>
      <Route path='/product/:pid' element={<Product/>}/>
      <Route path='/loginsignup' element={<LoginSignup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
   
      </BrowserRouter>
    </div>
  )
}

export default App
