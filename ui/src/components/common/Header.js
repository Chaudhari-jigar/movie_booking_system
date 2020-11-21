import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <Navbar bg="dark" expand="lg" variant="dark">
    {/* <Navbar.Brand href="/studentAdd">Add Student</Navbar.Brand> */}
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/student">My Tasks</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default Header;