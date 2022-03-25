import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>PICK THE PURSE</Navbar.Brand>
        <Nav className='ms-auto'>
          <FontAwesomeIcon icon={faBagShopping} className='bag-icon' />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
