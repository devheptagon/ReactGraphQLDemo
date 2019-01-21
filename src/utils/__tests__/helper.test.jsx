import { formatMoney } from '../helper'

describe('helper functions are being tested', () => {
    test('formats money properly', () => {
        const amounts = [0.1, 1, 100]
        const formattedAmounts = ['£0.10', '£1.00', '£100.00']
        amounts.map((amount, index) => expect(formatMoney(amount)).toBe(formattedAmounts[index]))    
    })
})
