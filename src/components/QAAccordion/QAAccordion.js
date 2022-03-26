import React from 'react'
import { Accordion } from 'react-bootstrap'

const QAAccordion = () => {
  return (
    <div className='container'>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>How React Works?</Accordion.Header>
          <Accordion.Body>
            React creates a VIRTUAL DOM in memory. Instead of manipulating the
            browser's DOM directly, React creates a virtual DOM in memory. Where
            it does all the necessary manipulating, before making the changes in
            the browser DOM. That is why react is fast and less costly that real
            DOM manipulation. React breaks the whole website in components. One
            components can have multiple component inside of it. We can use same
            components mutiple times. We can send data as props and create state
            in component.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Props vs state?</Accordion.Header>
          <Accordion.Body>
            Props is read-only, but state can be changed asynchronously. State
            can be create inside component, whereas props can be pass from
            parent component to child component. Changing the state force
            components to re-render, whereas props are immutable. To change the
            state we have to use setSate() method, but props can not be changed.
            State is locally scoped but props can be passed anywhere between
            parent and child component.Stateless component can have props, but
            Stateless component can not have state.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default QAAccordion
