import { deleteData, getData, postData, putData } from '../../utils/fetchData'
import {
    FETCH_ALL_ORDERS_STARTED,
    FETCH_ALL_ORDERS_SUCCESS,
    FETCH_ALL_ORDERS_FAILURE,
    FETCH_SINGLE_ORDER_STARTED,
    FETCH_SINGLE_ORDER_SUCCESS,
    FETCH_SINGLE_ORDER_FAILURE,
    FETCH_MY_ORDERS_STARTED,
    FETCH_MY_ORDERS_SUCCESS,
    FETCH_MY_ORDERS_FAILURE,
    ADD_ORDER_STARTED,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAILURE,
    DELETE_ORDER_STARTED,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    UPDATE_ORDER_DELIVERED_STARTED,
    UPDATE_ORDER_DELIVERED_SUCCESS,
    UPDATE_ORDER_DELIVERED_FAILURE,
    PAY_ORDER_STARTED,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAILURE
} from './types'

export const fetchAllOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_ALL_ORDERS_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await getData(`orders`, token)
        dispatch({
            type: FETCH_ALL_ORDERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_ALL_ORDERS_FAILURE,
            payload: message,
        })
    }
}

export const fetchSingleOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_ORDER_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await getData(`orders/${id}`, token)
        dispatch({
            type: FETCH_SINGLE_ORDER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_ORDER_FAILURE,
            payload: message,
        })
    }
}

export const fetchMyOrder = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_MY_ORDERS_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await getData(`orders/me`, token)
        dispatch({
            type: FETCH_MY_ORDERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_MY_ORDERS_FAILURE,
            payload: message,
        })
    }
}

export const addOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_ORDER_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await postData(`orders`, order, token)
        dispatch({
            type: ADD_ORDER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: ADD_ORDER_FAILURE,
            payload: message,
        })
    }
}


export const deleteOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_ORDER_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await deleteData(`orders/${id}`, token)
        dispatch({
            type: DELETE_ORDER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_ORDER_FAILURE,
            payload: message,
        })
    }
}

export const updateOrderToDelivered = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_ORDER_DELIVERED_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await putData(`orders/${id}/delivered`, {}, token)
        dispatch({
            type: UPDATE_ORDER_DELIVERED_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_ORDER_DELIVERED_FAILURE,
            payload: message,
        })
    }
}

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PAY_ORDER_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await putData(`orders/${id}/paid`, paymentResult, token)
        dispatch({
            type: PAY_ORDER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: PAY_ORDER_FAILURE,
            payload: message,
        })
    }
}

