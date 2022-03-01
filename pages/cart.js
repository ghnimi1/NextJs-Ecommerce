import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Card, Button } from 'react-bootstrap'
import Link from 'next/link'
import { removeFromCart } from '../redux/actions/cartActions';
import { useRouter } from 'next/router';

function cart(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const { cartItems } = useSelector((state) => state.cartItems)
    const checkout = () => {
        router.push('/shipping')
    }
    return (
        <div className='container'>
            <Link href={'/'}>
                <Button className='btn btn-light my-3'>
                    Go Back
                </Button>
            </Link>
            <h1>SHOPPING CART</h1>
            {cartItems?.length === 0 ? (
                <h4 style={{ textAlign: 'center' }}>
                    Your cart is empty
                </h4>
            ) : (
                cartItems?.map(item => (
                    <Row key={item._id}>
                        <Col md={2}>
                            <Image src={`https://storemernapp.herokuapp.com/${item?.image}`} alt={item?.image} fluid />
                        </Col>
                        <Col md={2}>
                            {item?.name}
                        </Col>
                        <Col md={2}>
                            {item?.price} $
                        </Col>
                        <Col md={2}>
                            {item?.qty}
                        </Col>
                        <Col md={2}>
                            <Button type="button"
                                variant="light"
                                onClick={() => dispatch(removeFromCart(item?.product))}>
                                <i className="fas fa-trash"></i>
                            </Button>
                        </Col>
                    </Row>
                ))
            )}
            {cartItems.length !== 0 && < Row >
                <Col md={8}></Col>
                <Col md={4} className='mt-5'>
                    <Card className='p-3'>
                        <h3>SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) ITEMS</h3>
                        <p>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)} $</p>
                        <Button
                            variant="primary"
                            onClick={checkout}
                        >
                            CHECKOUT
                        </Button>
                    </Card>
                </Col>
            </Row>}

        </div >
    );
}

export default cart;