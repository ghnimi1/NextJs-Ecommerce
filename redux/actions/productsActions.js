import { deleteData, getData, postData, putData } from '../../utils/fetchData'
import {
    FETCH_ALL_PRODUCT_STARTED,
    FETCH_ALL_PRODUCT_SUCCESS,
    FETCH_ALL_PRODUCT_FAILURE,
    FETCH_SINGLE_PRODUCT_STARTED,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_SINGLE_PRODUCT_FAILURE,
    ADD_PRODUCT_STARTED,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    DELETE_PRODUCT_STARTED,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_STARTED,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    FETCH_TOP_PRODUCT_STARTED,
    FETCH_TOP_PRODUCT_SUCCESS,
    FETCH_TOP_PRODUCT_FAILURE,
    ADD_REVIEWS_STARTED,
    ADD_REVIEWS_SUCCESS,
    ADD_REVIEWS_FAILURE,
} from './types'

export const fetchAllProducts = (keyword = '', pageNumber = '') => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_ALL_PRODUCT_STARTED,
        })
        const data = await getData(`products?keyword=${keyword}&pageNumber=${pageNumber}`)
        dispatch({
            type: FETCH_ALL_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_ALL_PRODUCT_FAILURE,
            payload: message,
        })
    }
}

export const fetchSingleProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_PRODUCT_STARTED,
        })
        const data = await getData(`products/${id}`)
        dispatch({
            type: FETCH_SINGLE_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_PRODUCT_FAILURE,
            payload: message,
        })
    }
}

export const addProducts = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_PRODUCT_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await postData(`products`, product, token)
        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: ADD_PRODUCT_FAILURE,
            payload: message,
        })
    }
}


export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await deleteData(`products/${id}`, token)
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_PRODUCT_FAILURE,
            payload: message,
        })
    }
}

export const updateProduct = (id, product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_PRODUCT_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await putData(`products/${id}`, product, token)
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_PRODUCT_FAILURE,
            payload: message,
        })
    }
}

export const fetchTopProducts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_TOP_PRODUCT_STARTED,
        })
        const data = await getData(`products/top`)
        dispatch({
            type: FETCH_TOP_PRODUCT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_TOP_PRODUCT_FAILURE,
            payload: message,
        })
    }
}

export const addReviews = (id, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_REVIEWS_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await postData(`products/${id}/reviews`, review, token)
        dispatch({
            type: ADD_REVIEWS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: ADD_REVIEWS_FAILURE,
            payload: message,
        })
    }
}