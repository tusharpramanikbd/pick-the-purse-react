import React from 'react'
import Selection from '../Selection/Selection'
import './Selections.css'

const Selections = (props) => {
  return (
    <div>
      <div className='products-selection'>
        <h5>Product Selection</h5>
        {props.selectedProducts.map((product) => {
          return <Selection key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Selections
