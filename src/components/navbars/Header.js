import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import Icon from '../../assets/brandlogo.svg';
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal'
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showReg, setShowReg] = useState(false);
    const handleCloseReg = () => setShowReg(false);
    const handleShowReg = () => setShowReg(true);

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
                                <Button className="button1" onClick={handleShowReg}><b>Register</b></Button>
                            </Nav>
                    </Container>
                </Navbar>
                <LoginModal show={show} handleClose={handleClose} />
                <RegisterModal show={showReg} handleClose={handleCloseReg} />
            </div>
        </div>
    )
}

export default Header
