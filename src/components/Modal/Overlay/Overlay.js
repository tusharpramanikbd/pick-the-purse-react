import React from 'react'
import './Overlay.css'

const Overlay = (props) => {
  function OverlayHandler() {
    props.visibilityHandler()
  }
  return (
    <div className='overlay-container'>
      <button onClick={OverlayHandler}>Ok</button>
    </div>
  )
}

export default Overlay
