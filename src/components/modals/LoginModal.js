import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';

function LoginModal(props) {
    const {handleClose, show, reg} = props;
    const dataUser = JSON.parse(localStorage.getItem('dataUser'));

    const [data, setData] = useState({
        isLogin: false,
        email: '',
        password: '',
        status: '',
    });
    
    const toSwitch = () => {handleClose(); reg();}

    function handleOnSubmit(e) {
        e.preventDefault();
        dataUser.map(function (element) {
            if (data.email === element.email && data.password === element.password) {
                localStorage.setItem('login', 'true');
                localStorage.setItem('dataLogin', JSON.stringify(element));
                props.setData(data);
                handleClose();
            } else {
                console.log('Failed');
            }
        })
    }

    function handleChange(e) {
        e.preventDefault();
        setData({
            ...data,
            isLogin: true,
            [e.target.name] : e.target.value,
        })
    }

    return (
        // <div>
        //     <Modal className="modal" show={show} onHide={handleClose}>
        //         <Modal.Body>
        //             <Form>
        //                 <h2 style={{color:'red', marginBottom:20}}><b>Login</b></h2>
        //                 <Form.Group className="formGroup" controlId="formBasicEmail">
        //                     <Form.Control className="formInput" type="email" placeholder="Enter your email" />
        //                 </Form.Group>
        //                 <Form.Group className="formGroup" controlId="formBasicPassword">
        //                     <Form.Control className="formInput" type="password" placeholder="Password" />
        //                 </Form.Group>
        //                 <Button className="button1" style={{width: '100%'}} type='submit'>
        //                     <b style={{fontSize:'18px'}}>Login</b>
        //                 </Button>
        //                 <Form.Label className="formLabelCenter">
        //                     Don't have an account ? 
        //                     <Form.Label onClick={handleClose}><b>&nbsp; Click Here</b></Form.Label>
        //                 </Form.Label>
        //             </Form>
        //         </Modal.Body>
        //     </Modal>        
        // </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <h2 style={{ color: "red" }}>
              <b>Login</b>
            </h2>
            <Form.Group className="formGroup" controlId="email">
              <Form.Label className="fromLabel">Email address</Form.Label>
              <Form.Control
                className="formInput"
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="formGroup" controlId="password">
              <Form.Label className="fromLabel">Password</Form.Label>
              <Form.Control
                className="formInput"
                type="password"
                onChange={(e) => handleChange(e)}
                name="password"
                placeholder="Password"
              />
            </Form.Group>
  
            <Button className="button1" style={{ width: "100%" }} type="submit">
              Submit
            </Button>
            <Form.Label className="formLabelCenter">
              Don't have an account ?
              <Form.Label onClick={toSwitch}>
                <b>Click Here</b>
              </Form.Label>
            </Form.Label>
          </Form>
        </Modal.Body>
      </Modal>
  
    )
}

export default LoginModal
