import React from 'react';
import Link from 'next/link'
import { Col, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Col xl={3} md={4} sm={6}>
            <Card className='shadow-sm my-3 p-1 bg-body rounded' style={{ height: '100%' }}>
                <Link href={`/product/${product._id}`}  >
                    <Card.Img
                        style={{ cursor: 'pointer' }}
                        className='img-thumbnail'
                        src={`https://storemernapp.herokuapp.com/${product.image}`}
                        variant='top'
                    />
                </Link>
                <Card.Body>
                    <Card.Title className='fs-6'>{product.name}</Card.Title>
                    <Card.Text className='fst-italic text-end text-danger'>${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product