import React, { useEffect } from 'react';
import { Table, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategory, deleteCategory } from '../../redux/actions/categoryActions';
import Link from 'next/link';
import Loader from '../../components/Loader';
import { useRouter } from 'next/router';
const categorie = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { category, loading } = useSelector((state) => state.category)
    const { success } = useSelector(state => state.deleteCategory)
    const { userInfo } = useSelector(state => state.userProfile)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    useEffect(() => {
        if (token && userInfo?.isAdmin) {
            dispatch(fetchAllCategory())
        } else {
            router.push('/')
        }

    }, [dispatch, success])
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteCategory(id))
        }
    }
    return (
        <div className='container'>
            {loading ? (<Loader />) : (<>
                <h1>Category</h1>
                <Row className='align-items-center'>
                    <Col>
                    </Col>
                    <Col className='text-center'>
                        <Link href='/admin/addCategory'
                            style={{ textDecoration: 'none' }}>
                            <Button className='my-3'>
                                <i className='fas fa-plus'></i> Create Category
                            </Button>
                        </Link>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col lg={6}>
                        {category?.map((categ) => (
                            <div className="shadow-lg p-3 mb-2 bg-body d-flex justify-content-between">
                                <span>{categ.categoryName}</span>
                                <span>
                                    <Link href={`/admin/category/${categ._id}`} >
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </Link>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(categ?._id)}
                                    >
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </span>
                            </div>
                        ))}
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </>)
            }
        </div >
    );
}

export default categorie;