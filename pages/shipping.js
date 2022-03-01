import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../redux/actions/cartActions';

function shipping() {
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [country, setCountry] = useState("")
    const dispatch = useDispatch()
    const router = useRouter()
    const shippingHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        router.push("/payment")
    }
    return (
        <div className='container'>
            <Button className='btn btn-light my-3' onClick={() => router.back()}>
                Go Back
            </Button>
            <Form onSubmit={shippingHandler}>
                <h3>SHIPPING</h3>
                <Form.Floating className="m-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Enter Address</label>
                </Form.Floating>
                <Form.Floating className="m-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Enter City</label>
                </Form.Floating>
                <Form.Floating className="m-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Enter Postal Code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Enter Postal Code</label>
                </Form.Floating>
                <Form.Floating className="m-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Enter Country</label>
                </Form.Floating>
                <Button className="m-3" variant="dark" type="submit">
                    Continue
                </Button>
            </Form>
        </div>
    );
}

export default shipping;