import React from 'react'
import './Product.css'
import { Card } from 'react-bootstrap'

const Product = (props) => {
  return (
    <Card className='product-card'>
      <Card.Img variant='top' src={props.product.img} className='product-img' />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>Price: ${props.product.price}</Card.Text>
      </Card.Body>
      <div className='text-center add-to-cart-btn'>
        <span>Add to Cart</span>
      </div>
    </Card>
  )
}

export default Product
