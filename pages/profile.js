import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Form, Button, Col, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyOrder } from '../redux/actions/orderActions';
import { fetchUserProfile, updateProfile } from '../redux/actions/usersActions';
import Loader from '../components/Loader';

function profile() {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userProfile)
    const { orders, loading } = useSelector(state => state.myOrder)
    const [name, setName] = useState(userInfo?.name)
    const [email, setEmail] = useState(userInfo?.email)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    useEffect(() => {
        dispatch(fetchMyOrder())
    }, [dispatch, userInfo])

    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile({ id: userInfo?._id, name, email, password }))
        setName('')
        setPassword('')
        setConfirmPassword('')
    }

    return (

        <div className='container'>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <h2>User Profile </h2>
            </div>
            <Row>
                <Col>
                    <Form onSubmit={submitHandler} style={{ width: '80%' }}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                disabled
                                type='email'
                                placeholder='Enter email'
                                value={email}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Confirm password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary' style={{ margin: '5px' }}>
                            Update
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <h2>My Orders</h2>
                    {loading ? (<Loader />) : (
                        <Table hover responsive='sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>DATE</th>
                                    <th>TOTAL</th>
                                    <th>PAID</th>
                                    <th>DELIVERED</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders?.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.createdAt}</td>
                                        <td>{order.totalPrice}</td>
                                        <td>
                                            {order.isPaid ? (
                                                order.paidAt
                                            ) : (
                                                <i className='fas fa-times' style={{ color: 'red' }}></i>
                                            )}
                                        </td>
                                        <td>
                                            {order.isDelivered ? (
                                                order.deliveredAt
                                            ) : (
                                                <i className='fas fa-times' style={{ color: 'red' }}></i>
                                            )}
                                        </td>
                                        <td>
                                            <Link href={`/order/${order._id}`}>
                                                <Button className='btn-sm' variant='light'>
                                                    Details
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row >
        </div>
    );
}
export default profile;