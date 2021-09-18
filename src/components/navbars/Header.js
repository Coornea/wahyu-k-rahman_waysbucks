import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import Icon from '../../assets/brandlogo.svg';
import LoginModal from '../modals/Modal';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function Header() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    return (
        <div>
            <div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <NavLink>
                                <img src={Icon} alt="Brand" style={{padding: 2}} />
                            </NavLink>
                        </Navbar.Brand>
                            <Nav>
                                <Button className="button2" onClick={handleShow}><b>Login</b></Button>
                                <Button className="button1"><b>Register</b></Button>
                            </Nav>
                    </Container>
                </Navbar>
                <LoginModal show={show} handleClose={handleClose} />
            </div>
        </div>
    )
}

export default Header
