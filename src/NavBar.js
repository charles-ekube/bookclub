import React, { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ThemeContext } from './Context/ThemeContext';
import { AuthContext } from './Context/AuthContext';
import { ThemeToggle } from './Components/ThemeToggle';

function NavBar() {

  const { isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const isAuthenticated = useContext(AuthContext);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{background:theme.ui, color:theme.syntax}}>
        <Navbar.Brand href="#home">Book Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">
              
            </Nav.Link>
          </Nav>
          {!isAuthenticated ?
            <Nav>
              <Nav.Link eventKey={2} href="/SignUp">
                Sign Up
             </Nav.Link>
              <Nav.Link href="/Login">
                Login
              </Nav.Link>
              <Nav.Link href="#toggle">
                <ThemeToggle/>
              </Nav.Link>
            </Nav> :
            <Nav>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                <ThemeToggle/>
              </Nav.Link>
            </Nav>
          }

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavBar;