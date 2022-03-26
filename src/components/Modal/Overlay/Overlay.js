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
  }

  if (props.product) {
    const { name, img, price } = props.product
    product = (
      <div>
        <img src={img} alt={name} className='overlay-img' />
        <h2 className='overlay-title'>{name}</h2>
        <h5 className='overlay-price'>Price: ${price}</h5>
      </div>
    )
  }

  return (
    <div className='overlay-container'>
      {props.isMaxSelected ? msg : props.product ? product : null}
      <Button variant='dark' onClick={OverlayHandler} className='overlay-btn'>
        Ok
      </Button>
    </div>
  )
}

export default Overlay
