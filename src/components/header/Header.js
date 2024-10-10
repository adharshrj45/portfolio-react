import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Button } from 'react-bootstrap';
import { TbSquareLetterA } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Collapse the menu
  };

  return (
    <Navbar expanded={expanded} expand="lg" className='py-5'>
      <Container className='d-flex justify-content-between'>
        <Link to='/' >
          <Navbar.Brand href="/">
            <TbSquareLetterA style={{ width: '50px', height: '50px', color: '#007bff' }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex gap-5 fs-4 fw-bold align-items-center">
            <NavLink
              to="/"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? '#007bff' : 'black',
              })}
              onClick={handleLinkClick} // Collapse on click
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? '#007bff' : 'black',
              })}
              onClick={handleLinkClick} // Collapse on click
            >
              About
            </NavLink>
            <NavLink
              to="/Projects"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? '#007bff' : 'black',
              })}
              onClick={handleLinkClick} // Collapse on click
            >
              Projects
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-decoration-none"
              style={({ isActive }) => ({
                color: isActive ? '#007bff' : 'black',
              })}
              onClick={handleLinkClick} // Collapse on click
            >
              Contact
            </NavLink>
            <Link to='https://drive.google.com/file/d/1zvcW1xWMt08pHd1rx0zMcMuPpsIhNrxf/view?usp=sharing' target='_blank'>
              <Button variant='outline-primary border-2 fs-4 fw-bold'>Resume</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
