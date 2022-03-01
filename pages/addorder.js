import React, { useEffect } from 'react';
import { Row, Col, Button, ListGroup, Card, Image } from 'react-bootstrap';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { addOrder } from '../redux/actions/orderActions';

function addorder() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { cartItems } = useSelector(state => state)
    const { order } = useSelector(state => state.order)
    useEffect(() => {
        if (!cartItems.shippingAddress?.address) {
            router.push('/shipping')
        } else if (!cartItems.paymentMethod) {
            router.push('/payment')
        }
    }, [])

    //   Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cartItems.itemsPrice = addDecimals(
        cartItems.cartItems?.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    cartItems.shippingPrice = addDecimals(cartItems.itemsPrice > 100 ? 0 : 100)
    cartItems.taxPrice = addDecimals(Number((0.15 * cartItems.itemsPrice).toFixed(2)))
    cartItems.totalPrice = (
        Number(cartItems.itemsPrice) +
        Number(cartItems.shippingPrice) +
        Number(cartItems.taxPrice)
    ).toFixed(2)

    const placeOrderHandler = (e) => {
        e.preventDefault()
        dispatch(addOrder({
            orderItems: cartItems.cartItems,
            shippingAddress: cartItems.shippingAddress,
            paymentMethod: cartItems.paymentMethod,
            itemsPrice: cartItems.itemsPrice,
            shippingPrice: cartItems.shippingPrice,
            taxPrice: cartItems.taxPrice,
            totalPrice: cartItems.totalPrice,
        }))
        router.push(`/order/${order?._id}`)
    }

    return (
        <div className='container'>
            <Button className='btn btn-light my-3' onClick={() => router.back()}>
                Go Back
            </Button>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address:</strong>
                                {cartItems.shippingAddress?.address},
                                {cartItems.shippingAddress?.city}{' '}
                                {cartItems.shippingAddress?.postalCode},{' '}
                                {cartItems.shippingAddress?.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cartItems.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            <ListGroup variant='flush'>
                                {cartItems.cartItems?.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image
                                                    src={`https://storemernapp.herokuapp.com/${item?.image}`}
                                                    alt={item.name}
                                                    fluid
                                                    rounded
                                                />
                                            </Col>
                                            <Col>
                                                <Link href={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty} x ${item.price} = ${item.qty * item.price}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${cartItems.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${cartItems.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cartItems.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${cartItems.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cartItems.cartItems === 0}
                                    onClick={placeOrderHandler}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default addorder;