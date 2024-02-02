import React from 'react'
import './BiggerCard.css'
function BigCard(props) {
  return (
    <div>
       <div className='card2'>
   <img className='img-in-bigcard' src = {props.card} />
   <h6>free door delivery <br/>at your door steps</h6>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation  <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
  )
}

export default BigCard
