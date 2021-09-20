import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

function CardProduct({item}) {
    return (
        <div>
            <Row>
                <Col key={item.id} id={item.id}>
                    <Card>
                        <Card.Img src={item.img} width={'100%'} style={{ objectFit:"cover" }}/>
                        <Card.Body style={{ backgroundColor:'#F6E6DA'}}>
                            <p className="titleProduct">{item.product}</p>
                            <p className="titlePrice">{item.price}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardProduct
