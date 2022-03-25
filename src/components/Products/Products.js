import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = (props) => {
  return (
    <div>
      <div className='product-container'>
        {props.products.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Products
