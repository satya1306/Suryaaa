import React from 'react'
import './Support.css'
import company1 from '../../assets/company1.jpeg'
import company2 from '../../assets/company2.jpg'
import company3 from '../../assets/company3.jpeg'
import icon from '../../assets/icon_surya.png'

const Support = () => {
  return (
   <div className="support">
      <div className="company">
        <img src={company1} alt="" />
        <div className="caption">
            <img src={icon} alt="" />
            <p>Pillai College of Engineering</p>
        </div>
      </div>
      <div className="company">
        <img src={company2} alt="" />
        <div className="caption">
        <img src={icon} alt="" />
            <p>Sweekriti Asset</p>
        </div>
      </div>
      <div className="company">
        <img src={company3} alt="" />
        <div className="caption">
        <img src={icon} alt="" />
            <p>Immortex solar</p>
        </div>
      </div>
   </div>
  )
}

export default Support
