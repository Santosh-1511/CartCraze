import React from 'react'
import './Hero.css'
import HeadImg from '../Assets/headimg.png'
const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-first">
        <img src={HeadImg} alt="poster" classname="hero-image" />
        <div className='hero-heading'>
        <h2>NEW ARRIVALS!</h2>
        </div>
        
      </div>
     <div className='hero-rest'>
      <div className="hero-left">
       
      </div>
        
      <div className="hero-right">

      </div>
      </div> 

    </div>
  )
}

export default Hero
