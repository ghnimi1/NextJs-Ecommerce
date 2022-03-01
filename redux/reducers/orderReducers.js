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
} from '../actions/types'

export const fetchAllOrdersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_ORDERS_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders: action.payload,
            };
        case FETCH_ALL_ORDERS_FAILURE:
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

export const fetchSingleOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_ORDER_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                order: action.payload,
            };
        case FETCH_SINGLE_ORDER_FAILURE:
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

export const fetchMyOrdersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MY_ORDERS_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_MY_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                orders: action.payload,
            };
        case FETCH_MY_ORDERS_FAILURE:
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

export const deleteOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_ORDER_STARTED:
            return { loading: true }
        case DELETE_ORDER_SUCCESS:
            return { loading: false, success: true, order: action.payload }
        case DELETE_ORDER_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateOrderToDeliveredReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ORDER_DELIVERED_STARTED:
            return {
                ...state,
                loading: true
            };
        case UPDATE_ORDER_DELIVERED_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                order: action.payload,
            };
        case UPDATE_ORDER_DELIVERED_FAILURE:
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

export const addOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ORDER_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                order: action.payload,
            };
        case ADD_ORDER_FAILURE:
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

export const payOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case PAY_ORDER_STARTED:
            return {
                ...state,
                loading: true
            };
        case PAY_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                order: action.payload,
            };
        case PAY_ORDER_FAILURE:
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