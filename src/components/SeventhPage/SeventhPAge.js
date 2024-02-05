import React from 'react';
import image from './leaf.png';
import './SeventhPAge.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";


function SeventhPage({ goToNextPage, goToPreviousPage }) {
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
                    <div className='footer-2'>
            <FaInstagramSquare />
            <FaLinkedin />
            <FaSquareFacebook />
            <p><FaRegCopyright/> 2022 Techverse World</p>
            </div>
      </div>
      <button onClick={goToPreviousPage}>Back</button>
      <button onClick={goToNextPage}>Next</button>
      <LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
      <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/>

    </div>

  );
}

export default SeventhPage;





