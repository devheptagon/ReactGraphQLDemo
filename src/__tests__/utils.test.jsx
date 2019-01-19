import { formatMoney } from '../utils/helper'
import Proxy from '../utils/proxy'
import axios from 'axios'

describe('helper functions are being tested', () => {
    test('formats money properly', () => {
        const amounts = [0.1, 1, 100]
        const formattedAmounts = ['£0.10', '£1.00', '£100.00']
        amounts.map((amount, index) => expect(formatMoney(amount)).toBe(formattedAmounts[index]))    
    })
})

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
