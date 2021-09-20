import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function CardProduct({item}) {
    const router = useHistory();

    const handlePushToDetail = (id) => {
        const dataLogin = JSON.parse(localStorage.getItem('dataLogin'));

        console.log(dataLogin);
        if (!dataLogin) {
            return (
                alert('Please Login First!')
            );
        } else {
            console.log(id);
            router.push(`product/${id}`);
        }
    }
    return (
        <div>
            <Row>
                <Col key={item.id} id={item.id}>
                     <Card onClick={() => handlePushToDetail(item.id)}>
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
