import { put, call, takeLatest } from 'redux-saga/effects'
import { PREFETCH_PRODUCTS_TYPE } from '../redux/actionTypes'
import { setLoadingAction, postFetchProductsAction } from '../redux/appActions'
import Proxy from '../utils/proxy'

export function* preFetchProductsSaga(action) {    
    yield put(setLoadingAction(true))  
    const response = yield call(Proxy.postData, action.payload.page) 
    const products = 
        (response.data && response.data.viewer.productList)
        ? response.data.viewer.productList
        : []
    yield put(postFetchProductsAction(products))    
    yield put(setLoadingAction(false))
}

export function* appSagas() {
    yield takeLatest(PREFETCH_PRODUCTS_TYPE, preFetchProductsSaga)
}