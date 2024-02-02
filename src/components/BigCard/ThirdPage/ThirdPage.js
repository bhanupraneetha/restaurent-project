import React from 'react'
import './Thirdpage.css'
import { FaCaretDown } from "react-icons/fa";

function ThirdPage() {
  return (
    <div className='parentofcard'>
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
    </div>

  )
}

export default ThirdPage
