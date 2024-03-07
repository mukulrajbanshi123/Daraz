import React, { useEffect, useState } from 'react'
import "./newcollection.scss"
import Card from '../Card/Card'
function Newcollections() {
  
  return (
    <div>
      <div className="newcollections">
        <h1>New Collections</h1>
        <div className="new-items">
            <Card categories="men's clothing"/>

        </div>
      </div>
    </div>
  )
}

export default Newcollections
