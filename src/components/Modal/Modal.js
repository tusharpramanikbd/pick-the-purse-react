import React from 'react'
// import { Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop/Backdrop'
import Overlay from './Overlay/Overlay'

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Overlay visibilityHandler={props.visibilityHandler} />,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
    </div>
  )
}

export default Modal
