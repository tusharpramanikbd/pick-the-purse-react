import React from 'react'
import './Selection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Selection = (props) => {
  const { id, name, img } = props.product

  const transhCanHandler = (id) => {
    props.removeProduct(id)
  }

  return (
    <div className='product-selection'>
      <img src={img} alt={name} />
      <span>{name}</span>
      <FontAwesomeIcon
        icon={faTrashCan}
        className='trash-icon'
        onClick={() => {
          transhCanHandler(id)
        }}
      />
    </div>
  )
}

export default Selection
