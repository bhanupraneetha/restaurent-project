import React from 'react'
import './BiggerCard.css'
function BigCard(props) {
  return (
    <div>
       <div className='card2'>
   <img className='img-in-bigcard' src = {props.card} />
   <h3 className='h6js'><b>free door delivery <br/>at your door steps</b></h3>
   <p className='pjs'>Lorem ipsum dolor sit amet,  <br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt  </p>
    </div>
    </div>
  )
}

export default BigCard
