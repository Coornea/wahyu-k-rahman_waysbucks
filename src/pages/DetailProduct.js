import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Image1 from '../assets/img1.svg'
import data from '../data/DataProduct'
import CardListTopping from '../components/CardListTopping'

function DetailProduct() {
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col xs={4}>
                    <img src={Image1} width={'100%'} alt='product' />
                </Col>
                <Col xs={6}>
                    <div className='d-flex flex-column justify-content-space-between'>
                        <div>
                            <h3 className='header3'>Ice Coffee Latte{data.location}</h3>
                            <p className='titlePrice'>Rp. 27.000{data.description}</p>
                        </div>
                        <div>
                            <p className='header3'>Ice Coffee Palm Sugar{data.location}</p>
                            <CardListTopping />
                        </div>
                        <div>
                            <Row>
                                <Col xs={6}>
                                    <p className='header3'>Total:</p>
                                </Col>
                                <Col xs={6} style={{textAlign:'right'}}>
                                    <p className='header3'>Rp. 27.000,-</p>
                                </Col>
                            </Row>
                        </div>
                        
                        <div>
                            <Button className="button1" style={{width: '100%'}} type='submit'>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
        </div>
    )
}

export default DetailProduct
