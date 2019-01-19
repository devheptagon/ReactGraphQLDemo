export const formatMoney = (amount) => {
    return amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      })
}