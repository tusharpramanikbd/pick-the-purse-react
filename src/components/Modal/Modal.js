import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop/Backdrop'
import Overlay from './Overlay/Overlay'

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Overlay
          product={props.product}
          isMaxSelected={props.isMaxSelected}
          modalVisibilityHandler={props.modalVisibilityHandler}
        />,
        document.getElementById('overlay')
      )}
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
    </div>
  )
}

export default Modal
