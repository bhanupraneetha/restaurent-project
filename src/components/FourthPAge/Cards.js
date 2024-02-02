import React from 'react'
import './Cards.css'
function Cards(props) {
  return (
    <div className='card1'>
   <img src = {props.card}  style = {{width:"200px", height:"150px",}}/>
    </div>
  )
}

export default Cards
