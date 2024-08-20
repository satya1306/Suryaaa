import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>S.U.R.Y.A.</h1>
        <p>Solar User's Relief through Yearly Analysis</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
