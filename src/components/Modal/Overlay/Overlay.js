import React from 'react'
import './Overlay.css'
import { Button } from 'react-bootstrap'

const Overlay = (props) => {
  let product, msg

  function OverlayHandler() {
    props.modalVisibilityHandler()
  }

  if (props.isMaxSelected) {
    msg = <h3 style={{ padding: '2rem' }}>Maximum Selection Reached</h3>
  } else {
    msg = <h3 style={{ padding: '2rem' }}>No Product Selected</h3>
  }

  if (props.product) {
    product = (
      <div>
        <img
          src={props.product.img}
          alt={props.product.name}
          className='overlay-img'
        />
        <h2 className='overlay-title'>{props.product.name}</h2>
        <h5 className='overlay-price'>Price: ${props.product.price}</h5>
      </div>
    )
  }

  return (
    <div className='overlay-container'>
      {props.isMaxSelected ? msg : props.product ? product : msg}
      <Button variant='dark' onClick={OverlayHandler} className='overlay-btn'>
        Ok
      </Button>
    </div>
  )
}

export default Overlay
