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
} from '../actions/types'

export const fetchCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_CATEGORY_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                category: action.payload,
            };
        case FETCH_ALL_CATEGORY_FAILURE:
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

export const deleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_STARTED:
            return { loading: true }
        case DELETE_CATEGORY_SUCCESS:
            return { loading: false, success: true, category: action.payload }
        case DELETE_CATEGORY_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_STARTED:
            return {
                ...state,
                loading: true
            };
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                category: action.payload,
            };
        case UPDATE_CATEGORY_FAILURE:
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

export const addCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CATEGORY_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                category: action.payload,
            };
        case ADD_CATEGORY_FAILURE:
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