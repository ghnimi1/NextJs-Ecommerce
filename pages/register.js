import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { register } from '../redux/actions/authActions';

function Register(props) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, loading } = useSelector(state => state.userRegister)
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(name, email, password, router))
    }
    return (
        <div>
            <Head>
                <title>Register Page</title>
            </Head>

            <form className="mx-auto my-4" style={{ maxWidth: '500px' }}
                onSubmit={handleSubmit}>
                {error && <Alert variant='danger'>{error}</Alert>}
                {loading && <Loader />}
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"
                        name="email" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark w-100 mt-2">Register</button>

                <p className="my-2">
                    Already have an account? <Link href="/signin"><a style={{ color: 'crimson' }}>Login Now</a></Link>
                </p>
            </form>
        </div>
    );
}

export default Register;