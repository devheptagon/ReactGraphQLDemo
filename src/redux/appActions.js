import { PREFETCH_PRODUCTS_TYPE, POSTFETCH_PRODUCTS_TYPE,  SET_LOADING_TYPE } from './actionTypes';

export const preFetchProductsAction = (page) => ({
    type: PREFETCH_PRODUCTS_TYPE,
    payload: { page }
})

export const postFetchProductsAction = (products) => ({
    type: POSTFETCH_PRODUCTS_TYPE,
    payload: { products }
})

export const setLoadingAction = (isLoading) => ({
    type: SET_LOADING_TYPE,
    payload: { isLoading }
})


