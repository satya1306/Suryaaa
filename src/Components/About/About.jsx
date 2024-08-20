import React from 'react'
import './About.css'
import about_img from '../../assets/home-slider-1.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="aboutimg" className='about-img'/>
        </div>
        <div className="about-right">
         <h3>ABOUT US</h3>
         <h2>Welcome to SURYA!</h2>
         <p>At SURYA, we are dedicated to empowering the future of renewable energy through cutting-edge solar power analysis and interpretation.
             Our mission is to provide comprehensive and accurate solar data analytics to help businesses, governments,
              and individuals make informed decisions about their solar energy investments.
         </p>
        </div>
      
    </div>
  )
}

export default About
