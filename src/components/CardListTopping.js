import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import imgTopping from '../assets/brandlogo.svg'

function CardListTopping() {
    return (
        <div>
            <Row xs={1} md={4} className="g-6">
                {Array.from({length:8}).map((_, index) => (
                    <Col>
                        <Card>
                            <Card.Img variant='top' src={imgTopping} />
                            <Card.Body>
                                <p>Card Title</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardListTopping
