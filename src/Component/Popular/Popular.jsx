import React from 'react'
import "./popular.scss"
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
function Popular() {
    // const cname=useParams()
  return (
    <div>
        <div className="popular">
            <h1>Popular In Womens</h1>
            
            <div className="popular-items">
                  <Card categories="women's clothing"/>
            </div>
        </div>
    </div>
  )
}

export default Popular