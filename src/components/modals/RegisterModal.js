import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap'

function RegisterModal(props) {
    const {handleClose, show} = props;

    return (
        <div>
            <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <h2 style={{color:'red', marginBottom:20}}><b>Register</b></h2>
                        <Form.Group className="formGroup" controlId="formBasicEmail">
                            <Form.Control className="formInput" type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="formGroup" controlId="formBasicPassword">
                            <Form.Control className="formInput" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="formGroup" controlId="formBasicPassword">
                            <Form.Control className="formInput" type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Button className="button1" style={{width: '100%'}} type='submit'>
                            <b style={{fontSize:'18px'}}>Register</b>
                        </Button>
                        <Form.Label className="formLabelCenter">
                            Already have an account ? 
                            <Form.Label onClick={handleClose}><b>&nbsp; Click Here</b></Form.Label>
                        </Form.Label>
                    </Form>
                </Modal.Body>
            </Modal>        
        </div>
    )
}

export default RegisterModal
