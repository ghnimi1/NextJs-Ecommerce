import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchSingleUser, updateUser } from '../../../redux/actions/usersActions'

const editUser = () => {
    const router = useRouter()
    const userId = router.query.id
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    useEffect(() => {
        if (!user?.name || user._id !== userId) {
            dispatch(fetchSingleUser(userId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }
    }, [dispatch, userId, user])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser(userId, { name, email, isAdmin }))
        router.push('/admin/users')
    }
    return (
        <div className='container'>
            <Link href='/admin/users'>
                <Button className='btn btn-light my-3'>
                    Go Back
                </Button>
            </Link>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <h1>Edit User</h1>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    disabled
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    disabled
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='isadmin'>
                                <Form.Check
                                    type='checkbox'
                                    label='Is Admin'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                ></Form.Check>
                            </Form.Group>
                            <Button type='submit' variant='primary'>
                                Update
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default editUser