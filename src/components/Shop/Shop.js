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
  const [isMaxSelected, setIsMaxSelected] = useState(false)

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
      if (!selectedProducts.find((product) => product.id === id)) {
        const selectedProduct = products.find((product) => product.id === id)
        const newSelectedProducts = [...selectedProducts, selectedProduct]
        setSelectedProducts(newSelectedProducts)
      }
    } else {
      setIsMaxSelected(true)
      setModalVisibility(true)
    }
  }

  const chooseOneProduct = (index) => {
    const product = selectedProducts[index]
    setSelectedProduct(product)
    setIsMaxSelected(false)
    setModalVisibility(true)
  }

  const chooseAgainProducts = () => {
    setSelectedProducts([])
  }

  const removeProduct = (id) => {
    const newSelectedProducts = selectedProducts.filter((product) => {
      return product.id !== id
    })
    setSelectedProducts(newSelectedProducts)
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
          chooseAgainProducts={chooseAgainProducts}
          removeProduct={removeProduct}
        />
      </div>
      {modalVisibility ? (
        <Modal
          product={selectedProduct}
          isMaxSelected={isMaxSelected}
          modalVisibilityHandler={modalVisibilityHandler}
        />
      ) : null}
    </>
  )
}

export default Shop
