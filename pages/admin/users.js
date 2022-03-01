import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from '../../redux/actions/usersActions';
import Link from 'next/link';
import Loader from '../../components/Loader';
import { useRouter } from 'next/router';

const users = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { users, loading } = useSelector((state) => state.users)
    const { success } = useSelector(state => state.deleteUser)
    const { success: successUpdate } = useSelector(state => state.updateUser)
    const { userInfo } = useSelector(state => state.userProfile)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    useEffect(() => {
        if (userInfo && userInfo?.isAdmin) {
            dispatch(fetchUsers())
        } else {
            router.push('/')
        }
    }, [dispatch, success, successUpdate])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
    }
    return (
        <div className='container'>
            <h1>Users</h1>
            {loading ? (<Loader />) : (
                <Table hover responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.isAdmin ? (
                                        <i className='fas fa-check' style={{ color: 'green' }}></i>
                                    ) : (
                                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                                    )}
                                </td>
                                <td>
                                    <Link href={`/admin/user/${user._id}`}  >
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </Link>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(user._id)}
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

export default users;