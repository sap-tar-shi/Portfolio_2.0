import React from 'react';
import '../Styles/App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar expand="lg" id="navbar" className="navbar-dark">
        <Container>
        <Navbar.Brand href="/">
            <img
                src={require('../logo.png')}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggler"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="nav">
          <Nav.Link href="/about"><span className='nav-num'>01. </span>About Me</Nav.Link>
                        <Nav.Link eventKey={2} href="/skills">
                            <span className='nav-num'>02. </span> Skill and Exp
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="/project">
                            <span className='nav-num'>03. </span>Project
                        </Nav.Link>
                        <Nav.Link eventKey={4} href="/contact">
                            <span className='nav-num'>04. </span>Contact
                        </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}
export default Header;


// function BasicExample() {
//   return (
    
//   );
// }

// export default BasicExample;