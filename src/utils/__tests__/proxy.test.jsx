import Proxy from '../proxy'
import axios from 'axios'

jest.mock('axios')

describe('proxy functions are being tested', () => {    
    test('fetches data from graphql server', async () => {
        expect.assertions(1)
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
        Proxy.postData(1).then(r => {
            expect(r).toEqual(mockedResponse.data)
        })
    })
})
