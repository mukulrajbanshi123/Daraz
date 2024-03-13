import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import ShopContextProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ShopContextProvider>
       <App /> 
       </ShopContextProvider>   
)
