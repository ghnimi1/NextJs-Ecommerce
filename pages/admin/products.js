import React, { useEffect } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, deleteProduct } from '../../redux/actions/productsActions';
import Link from 'next/link';
import Loader from '../../components/Loader';

const products = () => {
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state) => state)
    const { success } = useSelector(state => state.deleteProduct)
    //const { success: successUpdate } = useSelector(state => state.updateUser)
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch, success])
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
    }
    return (
        <div className='container'>
            <h1>Products</h1>
            {loading ? (<Loader />) : (
                <>
                    <Row className='align-items-center'>
                        <Col>
                        </Col>
                        <Col className='text-right'>
                            <Link href='/admin/addProduct'
                                style={{ textDecoration: 'none' }}>
                                <Button className='my-3'>
                                    <i className='fas fa-plus'></i> Create Product
                                </Button>
                            </Link>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Table hover responsive='sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.products?.products?.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td style={{ maxWidth: '250px' }}>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <Link href={`/admin/product/${product._id}`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </Link>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() => deleteHandler(product._id)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </div>
    );
}

export default products;