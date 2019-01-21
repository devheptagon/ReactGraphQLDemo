import { postFetchProductsAction, setLoadingAction } from '../appActions'
import { appReducer } from '../appReducer'

const initialState = {    
    products: [],
    isLoading: false
}

describe('App Reducer is being tested', () => {
    test('postFetchProductsAction returns products in new state', () => {
        const products = [{ productID: 1}]
        const state = appReducer(initialState, postFetchProductsAction(products))
        expect(state.products).toEqual(products)
    })

    test('setLoadingAction sets isLoading properly in new state', () => {
        let state = appReducer(initialState, setLoadingAction(true))
        expect(state.isLoading).toEqual(true)

        state = appReducer(initialState, setLoadingAction(false))
        expect(state.isLoading).toEqual(false)
    })
})