import React from 'react'
import './Bigcard.css'
import imge from '../BigCard/logo512.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function BigCard() {
  return (
    <div className='card-container'>
        <img className='img' src={imge} />
      <div className='childcard'>
        <h2 className='big-text'>Fire Water</h2>
        <p className='big-para'>We are all about We are all about to the<br/>  fullest and all contentin!  dining out or in!</p>
        <p className='city'> <FaMapMarkerAlt /> Mumbai City</p>
        <button className='button'>Book Now <FaArrowRightLong/> </button>

      </div>

    </div>
  )
}

export default BigCard
