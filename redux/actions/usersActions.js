import { deleteData, getData, putData } from '../../utils/fetchData'
import {
    FETCH_USER_FAIL,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    FETCH_SINGLE_USER_REQUEST,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAIL,
} from './types'

export const fetchUserProfile = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_USER_REQUEST,
        })
        const token = localStorage.getItem('token')
        const data = await getData('users/profile', token)
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_USER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

export const updateProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_PROFILE_REQUEST,
        })
        const token = localStorage.getItem('token')
        const data = await putData(`users/profile`, user, token)
        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: message,
        })
    }
}

export const fetchUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_USERS_REQUEST,
        })
        const token = localStorage.getItem('token')
        const data = await getData(`users`, token)
        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_USERS_FAIL,
            payload: message,
        })
    }
}

export const fetchSingleUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_USER_REQUEST,
        })
        const token = localStorage.getItem('token')
        const data = await getData(`users/${id}`, token)
        dispatch({
            type: FETCH_SINGLE_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_USER_FAIL,
            payload: message,
        })
    }
}


export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_USER_REQUEST,
        })
        const token = localStorage.getItem('token')
        const data = await deleteData(`users/${id}`, token)
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_USER_FAIL,
            payload: message,
        })
    }
}

export const updateUser = (id, user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_REQUEST,
        })
        const token = localStorage.getItem('token')
        const data = await putData(`users/${id}`, user, token)
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: message,
        })
    }
}
