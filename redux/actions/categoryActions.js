import { deleteData, getData, postData, putData } from '../../utils/fetchData'
import {
    FETCH_ALL_CATEGORY_STARTED,
    FETCH_ALL_CATEGORY_SUCCESS,
    FETCH_ALL_CATEGORY_FAILURE,
    ADD_CATEGORY_STARTED,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE,
    DELETE_CATEGORY_STARTED,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
    UPDATE_CATEGORY_STARTED,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAILURE
} from './types'

export const fetchAllCategory = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_ALL_CATEGORY_STARTED,
        })
        const data = await getData(`category`)
        dispatch({
            type: FETCH_ALL_CATEGORY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_ALL_CATEGORY_FAILURE,
            payload: message,
        })
    }
}

export const createCategory = (category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_CATEGORY_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await postData(`category`, category, token)
        dispatch({
            type: ADD_CATEGORY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: ADD_CATEGORY_FAILURE,
            payload: message,
        })
    }
}


export const deleteCategory = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_CATEGORY_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await deleteData(`category/${id}`, token)
        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_CATEGORY_FAILURE,
            payload: message,
        })
    }
}

export const updateCategory = (id, category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_CATEGORY_STARTED,
        })
        const token = localStorage.getItem('token')
        const data = await putData(`category/${id}`, category, token)
        dispatch({
            type: UPDATE_CATEGORY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_CATEGORY_FAILURE,
            payload: message,
        })
    }
}
