import React from 'react'
import './Smallcard.css'
import imge from '../BigCard/logo512.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function SmallCard({img}) {
  return (
    <div className='card-container'>
        <img className='img' src={img} style={{width:"300px", height:"190px"}} />
      <div className='childcard'>
        <h2 className='big-text'>Fire Water</h2>
        <h4 className='h6-ka-class'>$10.50</h4>
        <p className='big-para'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit </p>

      </div>

    </div>
  )
}

export default SmallCard
