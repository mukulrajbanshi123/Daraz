import React from 'react'
import Card from '../Component/Card/Card'
import { useParams } from 'react-router-dom';
function Categories() {
  const {cname}=useParams();
  // console.log(cname)
  return (
    <div>
      <Card categories={cname}/>
      
    </div>
  )
}

export default Categories