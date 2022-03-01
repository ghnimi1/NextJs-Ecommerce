import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders, deleteOrder } from '../../redux/actions/orderActions';
import Link from 'next/link';
import Loader from '../../components/Loader';
import { useRouter } from 'next/router';

const orders = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { orders, loading } = useSelector((state) => state.orders)
    const { success } = useSelector(state => state.deleteOrder)
    const { userInfo } = useSelector(state => state.userProfile)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    useEffect(() => {
        if (token && userInfo?.isAdmin) {
            dispatch(fetchAllOrders())
        } else {
            router.push('/')
        }
    }, [dispatch, success])
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteOrder(id))
        }
    }
    return (
        <div className='container'>
            <h1>Orders</h1>
            {loading ? (<Loader />) : (
                <Table hover responsive='sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
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
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt}</td>
                                <td>${order.totalPrice}</td>
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
                                        <Button variant='light' className='btn-sm'>
                                            Details
                                        </Button>
                                    </Link>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(order._id)}
                                    >
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default orders;