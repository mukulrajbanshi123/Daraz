import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Newcollections from '../Component/New Collectons/Newcollections'
import Newsletter from '../Component/Newletter/Newsletter'

function Home() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}

export default Home