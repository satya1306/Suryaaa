import React from 'react'
import './Vision.css'
import vision_img from '../../assets/home-slider-2.jpg'

const Vision = () => {
  return (
    <div className='vision'>
        <div className="vision-left">
        <h3>OUR VISION</h3>
         <h2>Principles of SURYA</h2>
         <p> We envision a world where renewable energy is the primary source of power, driving sustainable growth and environmental stewardship.
             Our goal is to be the global leader in solar power analysis and interpretation, delivering innovative and precise solar data analytics.
         </p>
        </div>
        <div className="vision-right">
         <img src={vision_img} alt="visionimg" className='vision-img'/>
        </div>
      
    </div>
  )
}

export default Vision
