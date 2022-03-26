import React from 'react'
import './Product.css'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { id, name, price, img } = props.product

  const addToCartClick = (id) => {
    props.addToCartClickHandler(id)
  }

  return (
    <Card className='product-card'>
      <Card.Img variant='top' src={img} className='product-img' />
      <div className='product-body'>
        <h5 className='product-title'>{name}</h5>
        <Card.Text>Price: ${price}</Card.Text>
      </div>
      <div
        className='text-center add-to-cart-btn'
        onClick={() => {
          addToCartClick(id)
        }}
      >
        <span>Add to Cart</span>
        <FontAwesomeIcon icon={faCartPlus} className='cart-icon' />
      </div>
    </Card>
  )
}

export default Product
