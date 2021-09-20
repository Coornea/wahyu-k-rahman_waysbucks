import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CardProduct from './CardProduct'

function CardList( {data, product, handleAddProduct} ) {
    return (
        <Row>
            {data.map((item, index) => (
                <Col key={index}>
                    <CardProduct item={item} Product={product} handleClick={handleAddProduct}/>
                </Col>
            ))}
        </Row>
    )
}

export default CardList
