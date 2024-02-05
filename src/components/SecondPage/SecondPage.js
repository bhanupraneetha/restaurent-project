import React from 'react'
import './SecondPAge.css'
import BigCard from '../BigCard/BigCard'
import { GoArrowRight } from "react-icons/go";
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";

function SecondPage({ goToNextPage, goToPreviousPage }) {
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
<LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
      <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/> 
<button onClick={goToPreviousPage}>Back</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
   
  )
}

export default SecondPage;
