import React from 'react'
import './Selection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Selection = (props) => {
  const { name, img } = props.product
  return (
    <div className='product-selection'>
      <img src={img} alt={name} />
      <span>{name}</span>
      <FontAwesomeIcon icon={faTrashCan} className='trash-icon' />
    </div>
  )
}

export default Selection
