import React from 'react'
import './Thirdpage.css'
import { FaCaretDown } from "react-icons/fa";
import first from './first.png'
import second from './Second.png'
function ThirdPage() {
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
    </div>

  )
}

export default ThirdPage
