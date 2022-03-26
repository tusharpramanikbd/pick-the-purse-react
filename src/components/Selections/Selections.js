import React from 'react'
import Selection from '../Selection/Selection'
import './Selections.css'
import { Button } from 'react-bootstrap'
import getRandomNumber from '../../utilities/RandomNumber'

const Selections = (props) => {
  const chooseOneHandler = () => {
    props.chooseOneProduct(getRandomNumber())
  }

  const chooseAgainHandler = () => {
    props.chooseAgainProducts()
  }

  return (
    <div>
      <div className='products-selection'>
        <h5>Product Selection</h5>
        {props.selectedProducts.map((product) => {
          return <Selection key={product.id} product={product} />
        })}
        <Button
          variant='outline-light'
          className='btn-choose-one'
          onClick={chooseOneHandler}
        >
          CHOOSE 1 FOR ME
        </Button>
        <Button onClick={chooseAgainHandler} variant='outline-primary'>
          CHOOSE AGAIN
        </Button>
      </div>
    </div>
  )
}

export default Selections
