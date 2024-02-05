import React from 'react'
import './SixthPAge.css'
import imge from './getongpay.jpg'
import phone from './phone.png'
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
function SixthPage( { goToNextPage, goToPreviousPage }) {
  return (
    <div>
          <div>
    <div className='box'>
        
    </div>
    <h1 className="text">Download app for <br/> Exciting Deals</h1> 
    <p className='lorem'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed  do  <br />eiusmod tempor incididunt ut labore</p>
</div>
    <img src = {imge}   className='images' />
    <img src = {phone}   className='phone' />
    <LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
      <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/>
    <button onClick={goToPreviousPage}>Back</button>
      <button onClick={goToNextPage}>Next</button>
      
    </div>
  )
}

export default SixthPage;
