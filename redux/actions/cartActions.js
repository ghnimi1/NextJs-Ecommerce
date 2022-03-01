import { getData } from "../../utils/fetchData";
import {
    ADD_TO_CART_SUCCESS,
    CART_REMOVE_ITEM,
    SHIPPING_ADDRESS,
    PAYMENT_METHOD
} from "./types";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const token = localStorage.getItem('token')
    const data = await getData(`products/${id}`, token)
    dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartItems.cartItems))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', data)
}

export const saveShippingAddress = (data) => (dispatch, getState) => {
    dispatch({
        type: SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}