import React,{ useRef } from 'react'
import './Team.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/tusharikamam.jpeg'
import user_2 from '../../assets/parth.jpg'
import user_3 from '../../assets/shruti.jpeg'
import user_4 from '../../assets/satyaja.jpeg'

const Team =() => {

    const slider = useRef();
    let tx = 0;


    const slideFoward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;


    }
  
  return (
    <div className='team'>
        <img src={next_icon} alt="" className='next-btn' onClick
        ={slideFoward}/>
        <img src={back_icon} alt="" className='back-btn' onClick
        ={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Dr.Tusharika Banerjee</h3>
                            <span>Mentor</span>
                        </div>
                        
                    </div>
                </div>
              </li>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Mr.Parth Yadav</h3>
                            <span>Intern</span>
                        </div>
                       
                    </div>
                </div>
              </li>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Ms.Shruti Dere</h3>
                            <span>Intern</span>
                        </div>
                        
                    </div>
                </div>
              </li>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Ms.Satyaja Shivthare</h3>
                            <span>Intern</span>
                        </div>
                       
                    </div>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Team
