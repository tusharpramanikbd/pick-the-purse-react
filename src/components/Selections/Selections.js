import React from 'react'
import Selection from '../Selection/Selection'
import './Selections.css'
import { Button } from 'react-bootstrap'

const Selections = (props) => {
  return (
    <div>
      <div className='products-selection'>
        <h5>Product Selection</h5>
        {props.selectedProducts.map((product) => {
          return <Selection key={product.id} product={product} />
        })}
        <Button variant='outline-light' className='btn-choose-one'>
          CHOOSE 1 FOR ME
        </Button>
        <Button variant='outline-primary'>CHOOSE AGAIN</Button>
      </div>
    </div>
  )
}

export default Selections