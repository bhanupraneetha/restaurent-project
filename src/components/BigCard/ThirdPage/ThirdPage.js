import React from 'react'
import './Thirdpage.css'
import { FaCaretDown } from "react-icons/fa";
import first from './first.png'
import second from './Second.png'
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
function ThirdPage({ goToNextPage, goToPreviousPage }) {
  return (
    <div className='parentofcard'>
            <img src = {first}  className='img-threep'/>
            <img src = {second}  className='img-three222p'/>

      <div className='card-card'>

        <div className='teal-div'>

        </div>
        <h3 className='adv-booking' >advanced booking</h3>
        <div className="search">
    <input type="text" placeholder="Search restaurent" className="input" /> <button className="go">GO</button>
    <div>
    <div className='date'>  Date  <FaCaretDown/> </div>
        <p className='date'>15-9-19</p>
    </div>
    <div className='time'>  Time  <FaCaretDown/> </div>
        <p className='time'>9:30 PM</p>
    </div>
    <div className='guests'>  Guests  <FaCaretDown/> </div>
        <p className='guests'>2 Guests</p>
    </div>
    <LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
      <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/> 

    <button onClick={goToPreviousPage}>Back</button>
      <button onClick={goToNextPage}>Next</button>
    </div>

  )
}

export default ThirdPage
