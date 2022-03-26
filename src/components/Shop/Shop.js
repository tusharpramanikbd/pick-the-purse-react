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
    // Here fetching the json data
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // This function is for ad to cart button click event
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

  // This function show random product from selected products
  const chooseOneProduct = (index) => {
    if (selectedProducts.length === 4) {
      const product = selectedProducts[index]
      setSelectedProduct(product)
      setIsMaxSelected(false)
      setModalVisibility(true)
    }
  }

  // This Function clears the selected products
  const chooseAgainProducts = () => {
    setSelectedProducts([])
  }

  // This function remove single selected product
  const removeProduct = (id) => {
    const newSelectedProducts = selectedProducts.filter((product) => {
      return product.id !== id
    })
    setSelectedProducts(newSelectedProducts)
  }

  // This function handle modal visibility
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
