import React from 'react'
import './Bigcard.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function BigCard({imge}) {
  return (
    <div className='card-container-bg'>
        <img className='img-im' src={imge} />
      <div className='childcard-bg'>
        <h2 className='big-text-bg'>Fire Water</h2>
        <p className='big-para-bg'>We are all about We are all about to the<br/>  fullest and all contentin!  dining out or in!</p>
        <p className='city-bg'> <FaMapMarkerAlt /> Mumbai City</p>
        <button className='button-btn'>Book Now <FaArrowRightLong/> </button>

      </div>

    </div>
  )
}

export default BigCard
