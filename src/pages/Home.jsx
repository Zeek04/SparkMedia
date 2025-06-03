import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Background_image from "../assets/car.jpg"

import "../css/Home.css"

const Home = () => {
  return (
    <>
    <div className="background">
      <img id='background_image' src={Background_image} alt="" />
    </div>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default Home