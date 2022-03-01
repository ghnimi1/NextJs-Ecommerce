import { postData } from '../../utils/fetchData'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from './types'

export const login = (email, password, router) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const data = await postData('auth/login', { email, password })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })
        router.push('/')
        localStorage.setItem('token', data.token)
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

export const register = (name, email, password, router) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })
        const data = await postData('auth/register', { name, email, password })
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
        router.push('/signin')
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
