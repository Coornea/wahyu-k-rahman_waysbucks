import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import Icon from '../../assets/brandlogo.svg';
import Guest from './Guest'
import Admin from './Admin'
import User from './User'

// import LoginModal from '../modals/LoginModal';
// import RegisterModal from '../modals/RegisterModal'
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function Header() {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [showReg, setShowReg] = useState(false);
    // const handleCloseReg = () => setShowReg(false);
    // const handleShowReg = () => setShowReg(true);

    const router = useHistory();
    const dataLogin = JSON.parse(localStorage.getItem('dataLogin'));
    console.log(dataLogin);

    const [data, setData] = useState({
        isLogin: false,
        email: '',
        password: '',
        status: '',
    });

    function handleLogout() {
        localStorage.removeItem('dataLogin');
        localStorage.removeItem('login');
        setData({
            isLogin: false,
            email: '',
            password: '',
            status: '',
        })
        router.push('/');
    }
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
                            <Nav className='me-auto' />
                            <Nav>
                                {/* <Button className="button2" onClick={handleShow}><b>Login</b></Button>
                                <Button className="button1" onClick={handleShowReg}><b>Register</b></Button> */}
                                {dataLogin?(dataLogin.status === 'Admin' ? <Admin handleLogout={handleLogout} /> : <User handleLogout={handleLogout} />) : <Guest setData={setData} />}
                            </Nav>
                    </Container>
                </Navbar>
                {/* <LoginModal show={show} handleClose={handleClose} />
                <RegisterModal show={showReg} handleClose={handleCloseReg} /> */}
            </div>
        </div>
    )
}

export default Header
