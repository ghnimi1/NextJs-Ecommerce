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
} from '../actions/types'

export const fetchAllProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload,
            };
        case FETCH_ALL_PRODUCT_FAILURE:
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

export const fetchSingleProductReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                product: action.payload,
            };
        case FETCH_SINGLE_PRODUCT_FAILURE:
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

export const fetchTopProductReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TOP_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_TOP_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload,
            };
        case FETCH_TOP_PRODUCT_FAILURE:
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

export const deleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_STARTED:
            return { loading: true }
        case DELETE_PRODUCT_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case DELETE_PRODUCT_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateProductReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                product: action.payload
            };
        case UPDATE_PRODUCT_FAILURE:
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

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                product: [action.payload, ...state.products],
            };
        case ADD_PRODUCT_FAILURE:
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

export const addReviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_REVIEWS_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_REVIEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                product: action.payload,
            };
        case ADD_REVIEWS_FAILURE:
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