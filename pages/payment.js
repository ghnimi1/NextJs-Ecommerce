import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/actions/cartActions';

function payment() {
    const [payment, setPayment] = useState("PayPal")
    const dispatch = useDispatch()
    const router = useRouter()
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    useEffect(() => {
        if (!token) {
            router.push('/signin')
        }
    }, [])
    const paymentMeth = () => {
        dispatch(savePaymentMethod(payment))
        router.push("/addorder")
    }
    return (
        <div className="container mb-3">
            <Button className='btn btn-light my-3' onClick={() => router.back()}>
                Go Back
            </Button>
            <Form.Check
                type="radio"
                label="PayPal"
                checked
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
            />
            <Button
                onClick={() => paymentMeth()}
                variant="dark" type="submit">
                Continue
            </Button>
        </div>
    );
}

export default payment;