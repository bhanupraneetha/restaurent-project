// import React from 'react';
// import "./FirstPage.css";
// import { IoMdArrowDropdown } from "react-icons/io";
// import img from "./food.png";
// import { MdOutlineLocationOn } from "react-icons/md";
// import grillz from "./grillz.png"
// import { LiaArrowCircleLeftSolid } from "react-icons/lia";
// import { LiaArrowCircleRightSolid } from "react-icons/lia";
// import { RxAvatar } from "react-icons/rx";

// function FirstPage({ goToNextPage, goToPreviousPage }) {
//   return (
//     <div className="container" >  
//       <div className='navbar-container'>  
//       <nav >
//   <ul>    
//     <div className="nav">
//     <li><img style={{width:"100px " ,height:"50px" ,  }}src={grillz}  /></li>
//     <li><a href="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Services</a></li>
//     <li><a href="#">Contact</a></li>
//     </div>
//     {/* <li className='user'><a href="#">user</a></li> */}
//     <div className="userlogin">
//     <li>
//         {/* <img style={{width:"20px " ,height:"20px"}}src={img}  /> */}
//         <RxAvatar style={{fontSize:"30"}} />
//         </li>
//         <li> user</li>
//         <div class="dropdown">
//         <li  ><IoMdArrowDropdown /> </li>
//         <div class="dropdown-content">
//   <a href="#">Link 1</a>
//   <a href="#">Link 2</a>
//    </div>
//    </div>
// </div>
//   </ul>
// </nav>
//   </div >
// <h1 className="food"><b>Food</b></h1>
//  <h1 className="text">Discover Restaurent  <br/> & Delicious Food</h1> 
//  <div className="plate">
//  <img  src={img} style={{height:"600px",width:"600px"}} />
//  </div>
// <div className="location">
// <h4> <MdOutlineLocationOn />Indore</h4>
// </div>
// <div className="search">
//     <input type="text2" placeholder="search restaurent & food" className="input" /><button className="go">GO</button>
// </div>
// <div  className="icons">
//       <LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
//       <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/> 
//       </div>
//       {/* <button onClick={goToPreviousPage}>Back</button>
//       <button onClick={goToNextPage}>Next</button> */}
//       </div>
//   )
// }
// export default FirstPage;



import React from 'react';
import "./FirstPage.css";
import { IoMdArrowDropdown } from "react-icons/io";
import img from "./food.png";
import { MdOutlineLocationOn } from "react-icons/md";
import grillz from "./grillz.png"
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { RxAvatar } from "react-icons/rx";

function FirstPage({ goToNextPage, goToPreviousPage }) {
  return (
    <div className="container-fp" >  
      <div className='navbar-container'>  
      <nav >
  <ul>    
    <div className="nav">
    <li><img style={{width:"100px " ,height:"50px" ,  }}src={grillz}  /></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
    </div>
    {/* <li className='user'><a href="#">user</a></li> */}
    <div className="userlogin">
    <li>
        {/* <img style={{width:"20px " ,height:"20px"}}src={img}  /> */}
        <RxAvatar style={{fontSize:"30"}} />
        </li>
        <li> user</li>
        <div class="dropdown">
        <li  ><IoMdArrowDropdown /> </li>
        <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
   </div>
   </div>
</div>
  </ul>
</nav>
  </div >
<h1 className="food"><b>Food</b></h1>
 <h1 className="text-discoverfood">Discover Restaurent  <br/> & Delicious Food</h1> 
 <div className="plate">
 <img  src={img} style={{height:"600px",width:"600px"}} />
 </div>
<div className="location">
<h4> <MdOutlineLocationOn />Indore</h4>
</div>
<div className="search-s">
    <input type="text" placeholder="search restaurent & food" className="input-i" /><button className="go-i">GO</button>
</div>
<div  className="icons">
      <LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
      <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/> 
      </div>
      
      </div>
  )
}
export default FirstPage;



