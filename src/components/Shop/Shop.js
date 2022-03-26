import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Products from '../Products/Products'
import Selections from '../Selections/Selections'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})
  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const addToCartClickHandler = (id) => {
    if (selectedProducts.length < 4) {
      const selectedProduct = products.find((product) => product.id === id)
      const newSelectedProducts = [...selectedProducts, selectedProduct]
      setSelectedProducts(newSelectedProducts)
    } else {
      console.log('You can not select more than 4 products')
    }
  }

  const chooseOneProduct = (index) => {
    const product = selectedProducts[index]
    setSelectedProduct(product)
    setModalVisibility(true)
  }

  const modalVisibilityHandler = () => {
    setModalVisibility(!modalVisibility)
  }

  return (
    <>
      <div className='shop-container'>
        <Products
          products={products}
          addToCartClickHandler={addToCartClickHandler}
        />
        <Selections
          selectedProducts={selectedProducts}
          chooseOneProduct={chooseOneProduct}
        />
      </div>
      {modalVisibility ? (
        <Modal
          product={selectedProduct}
          modalVisibilityHandler={modalVisibilityHandler}
        />
      ) : null}
    </>
  )
}

export default Shop
