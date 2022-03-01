import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { login } from '../redux/actions/authActions';

function signin(props) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, loading } = useSelector(state => state.userLogin)
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(email, password, router))
    }
    return (
        <div>
            <Head>
                <title>Sign in Page</title>
            </Head>
            <form className="mx-auto my-4"
                style={{ maxWidth: '500px' }}
                onSubmit={handleSubmit}>
                {error && <Alert variant='danger'>{error}</Alert>}
                {loading && <Loader />}
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
                <button type="submit" className="btn btn-dark w-100 mt-2">Login</button>
                <p className="my-2">
                    You don't have an account? <Link href="/register"><a style={{ color: 'crimson' }}>Register Now</a></Link>
                </p>
            </form>
        </div>
    );
}

export default signin;