import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#'>Hello</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarNav' />
      <Navbar.Collapse id='navbarNav'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='blog'>
            Blog Page
          </Nav.Link>
          <Nav.Link as={Link} to='profile'>
            Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
