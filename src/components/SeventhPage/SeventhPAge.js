import React from 'react';
import image from './leaf.png';
import './SeventhPAge.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function SeventhPAge() {
  return (
    <div>
      <img src={image} style={{ height: "500px" }} />
      <div className='container'>
        <h4 className='h4'>Get Notified <br /> about new amazing products</h4>
        <div className='para-pe'>
          <p style={{ fontWeight: "600" }}>Lorem ipsum is simply dummy text of the printing and typesetting industry </p>
          <p style={{ fontWeight: "600" }}>It has been the industry's standard dummy text ever since</p>
        </div>

        <div className="search">
          <input type="text" placeholder="E-Mail" className="input" /> 
          <FaArrowCircleRight className="go-icon" style={{fontSize:"30px"}} />
        </div>

        <div className='footer'>
            <h6>Product</h6>
            <h6>Company</h6>
            <h6>Learn more</h6>
            <h6>Get in touch</h6>

        </div>
      </div>
    </div>
  );
}

export default SeventhPAge;


<div className='footer-2'>

</div>

<FaInstagramSquare />
<FaLinkedin />
<FaSquareFacebook />
