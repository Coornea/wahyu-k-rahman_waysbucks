import React, { useState } from 'react'
import { Navbar, Container, Nav, Button, NavLink } from "react-bootstrap";
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal'

function Guest(props) {
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
                    <Button className="button2" onClick={handleShow} variant='light'>Login</Button>
                    <Button className="button1" onClick={handleShowReg}>Register</Button>
                    <LoginModal show={show} handleClose={handleClose} reg={handleShowReg} setData={props.setData} />
                    <RegisterModal show={showReg} handleClose={handleCloseReg} login={handleShow} />
                </Navbar>
                {/* <LoginModal show={show} handleClose={handleClose} />
                <RegisterModal show={showReg} handleClose={handleCloseReg} /> */}
            </div>
        </div>
    )
}

export default Guest
