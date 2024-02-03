import React from 'react'
import './SecondPAge.css'
import BigCard from '../BigCard/BigCard'
import { GoArrowRight } from "react-icons/go";

function SecondPage() {
  return (
    <div>
       <div>
    <div className='box'>
        
    </div>
    <h1 className="dining">Some top restaurent for <br/> dining out or in</h1> 
    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation  <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div className='card-containerisation'>
  < BigCard />
  <BigCard />
    <div className='seemore'>
      <GoArrowRight style={{fontSize:'50px'}} />
      <h6>See More</h6>
    </div>
</div>
    </div>
   
  )
}

export default SecondPage
