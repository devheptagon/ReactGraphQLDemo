import { SET_LOADING_TYPE, PREFETCH_PRODUCTS_TYPE, POSTFETCH_PRODUCTS_TYPE } from './actionTypes'

const initialState = {    
    products: [],
    isLoading: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case POSTFETCH_PRODUCTS_TYPE:
            return { ...state, products: [...action.payload.products] }
        case SET_LOADING_TYPE:
            return { ...state, isLoading: action.payload.isLoading }
        case PREFETCH_PRODUCTS_TYPE:
        default:
            return state
    }
}