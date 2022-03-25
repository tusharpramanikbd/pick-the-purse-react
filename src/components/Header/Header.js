import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>PICK THE PURSE</Navbar.Brand>
        <Nav className='ms-auto'>
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ color: 'white', fontSize: '1.5rem' }}
          />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
