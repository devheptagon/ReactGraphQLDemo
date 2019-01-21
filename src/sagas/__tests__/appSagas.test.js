import { preFetchProductsSaga } from '../appSagas'
import { postFetchProductsAction } from '../../redux/appActions'
import axios from 'axios'

jest.mock('axios')
const mockedResponse = {
    data: {
        productList: [
            {
                productID: '123',
                name: 'pie',
                unitPrice: '100'
            }
        ]
    }            
}
axios.mockResolvedValue(mockedResponse)     

describe('App saga is being tested', () => {
    test('preFetchProductsSaga returns proper values with iterations', async () => {
        const mockedResponse = {
            data: {
                productList: [
                    {
                        productID: '123',
                        name: 'pie',
                        unitPrice: '100'
                    }
                ]
            }            
        }       

        const saga = preFetchProductsSaga(postFetchProductsAction([]))
        let loadingResponse = saga.next()        
        expect(loadingResponse).not.toBeNull()
        expect(loadingResponse.done).toBe(false)        
        expect(loadingResponse.value.hasOwnProperty('PUT'))
        expect(loadingResponse.value.PUT.action.type).toBe('SET_LOADING_TYPE')
        expect(loadingResponse.value.PUT.action.payload.isLoading).toBe(true)

        const fetchResponse = saga.next()        
        expect(fetchResponse.value.CALL).not.toBeNull()
    })
})

