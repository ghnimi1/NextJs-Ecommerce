import React, { useState } from 'react'
import Link from 'next/link'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { createCategory } from '../../redux/actions/categoryActions'

const addCategory = () => {
    const router = useRouter()
    const [categoryName, setCategoryName] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCategory({ categoryName }))
        router.push('/admin/categories')
    }

    return (
        <div className='container'>
            <Link href='/admin/categories'>
                <Button className='btn btn-light my-3'>
                    Go Back
                </Button>
            </Link>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <h1>Create Category</h1>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter category name'
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Create
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default addCategory