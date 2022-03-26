import React from 'react'
import Product from '../Product/Product'
import './Products.css'

const Products = (props) => {
  return (
    <div className='product-container'>
      {props.products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addToCartClickHandler={props.addToCartClickHandler}
          />
        )
      })}
    </div>
  )
}

export default Products
