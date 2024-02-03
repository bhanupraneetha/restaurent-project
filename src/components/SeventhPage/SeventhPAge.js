import React from 'react'
import image from './leaf.png'
import './SeventhPAge.css'
function SeventhPAge() {
  return (
    <div>
      <img  src = {image} style = {{height:"500px"}} />
      <div className='container' >
            <h4 className='h4'>Get Notified <br /> about new amazing products</h4>
      </div>

    </div>
  )
}

export default SeventhPAge
