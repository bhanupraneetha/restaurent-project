import React from 'react';
import './FourthPAge.css';
import Cards from './Cards'
import BigCard from './BiggerCard';
import img1 from './img-1.jpeg';
import img3 from './img-3.jpeg'
import img2 from './img-2.jpeg'

function Fourthpage() {
  return (
    <div>
      <div>
    <div className='box'>
        
    </div>
    <h1 className="text"> Our <br/> Services</h1> 
    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation  <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div className='cards-alignment'>
  <div>
  <Cards card= {img1} />
  <div className='sec-img-shift'>
  <Cards card= {img2} />

  </div>
  
   <div className='big-img-shift'>
   <BigCard  card = {img3} /> 
    </div> 
  </div>
</div>
    </div>
  )
}

export default Fourthpage
