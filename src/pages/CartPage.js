import React from 'react'
import { Col, Form, Row, Button, Image } from 'react-bootstrap';
import Image1 from '../assets/img1.svg'
import del from '../assets/delete.svg'

function CartPage() {
    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs={6}>
                    <h3 className='header3'>MY Cart</h3>
                    <p className='titlePrice'>Review Your Order Here</p>
                    <hr />

                    <Row>
                        <Row style={{marginBottom:20}}>
                            <Col xs={1}>
                                <Image src={Image1} width='100%' alt='Image' />
                            </Col>
                            <Col xs={8}>
                                <p className='titleProduct'>Coffee Vanilla</p>
                                <p className='titlePrice'>Topping : Topping 1, Topping 2</p>
                            </Col>
                            <Col xs={3} style={{textAlign:'right'}}>
                                <p className='titleProduct'>Rp. 20.000,-</p>
                                <img style={{width:20, height:20}} src={del} alt='Delete' />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1}>
                                <Image src={Image1} width={"100%"} />
                            </Col>
                            <Col xs={8}>
                                <p className="tittleProduct">Coffee Vanila</p>
                                <p className="tittlePrice">Topping : Topping 1, Topping 2</p>
                            </Col>
                            <Col xs={3} style={{ textAlign: "right" }}>
                                <p className="tittleProduct">Rp 20.000</p>
                                <img
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                                src={del} alt="img" 
                                />
                            </Col>
                        </Row>

                        <hr />

                        <Row className="mb-3">
                            <Col xs={6}>
                                <hr />
                                <p className="tittlePrice">Review Your Order</p>
                            </Col>
                            <Col xs={6}>
                                <div className="d-flex flex-column justify-content-space-beetwen">
                                <div></div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    </Col>
                    <Col xs={4}>
                    <div className="d-flex flex-column justify-content-space-beetwen">
                        <div>
                            <Form>
                                <Form.Group className="formGroup" controlId="formBasicEmail">
                                <Form.Label className="fromLabel">Email address</Form.Label>
                                <Form.Control
                                    className="formInput"
                                    type="email"
                                    placeholder="Enter email"
                                />
                                </Form.Group>
                                <Form.Group className="formGroup" controlId="formBasicPassword">
                                <Form.Label className="fromLabel">Password</Form.Label>
                                <Form.Control
                                    className="formInput"
                                    type="password"
                                    placeholder="Enter Password"
                                />
                                </Form.Group>
                                <Form.Group className="formGroup" controlId="formBasicFullname">
                                <Form.Label className="fromLabel">Full Name</Form.Label>
                                <Form.Control
                                    className="formInput"
                                    type="text"
                                    placeholder="Enter Fullname"
                                />
                                </Form.Group>

                                <Button
                                className="button1"
                                style={{ width: "100%" }}
                                type="submit"
                                >
                                Pay
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CartPage;
