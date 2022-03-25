import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className='shop-container'>
      <Products products={products} />
      <div className='product-selection'>
        <h5>Product Selection</h5>
      </div>
    </div>
  )
}

export default Shop
