import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Button } from 'react-bootstrap';
import { TbSquareLetterA } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className='py-5'>
        <Container className='d-flex justify-content-between'>
          <Link to='/' >
          <Navbar.Brand href="/">
            <TbSquareLetterA style={{ width: '50px', height: '50px', color: '#007bff' }} />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="d-flex gap-5 fs-4 fw-bold align-items-center">
              <NavLink
                to="/"
                className="text-decoration-none"
                style={({ isActive }) => ({
                  color: isActive ? '#007bff' : 'black',
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/Projects"
                className="text-decoration-none"
                style={({ isActive }) => ({
                  color: isActive ? '#007bff' : 'black',
                })}
              >
                Projects
              </NavLink>
              <NavLink
                to="/Contact"
                className="text-decoration-none"
                style={({ isActive }) => ({
                  color: isActive ? '#007bff' : 'black',
                })}
              >
                Contact
              </NavLink>
              <Link to='https://drive.google.com/file/d/1zvcW1xWMt08pHd1rx0zMcMuPpsIhNrxf/view?usp=sharing' target='_blank'>
              <Button variant='outline-primary border-2  fs-4 fw-bold'>Resume</Button>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
