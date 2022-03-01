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
} from '../actions/types'

export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case FETCH_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const updateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userInfo: action.payload,
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}
export const fetchUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload,
            };
        case FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return { loading: true }
        case DELETE_USER_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case DELETE_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateUserReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                user: action.payload,
            };
        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchSingleUserReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            };
        case FETCH_SINGLE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}