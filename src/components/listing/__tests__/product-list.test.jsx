import React from 'react'
import { ProductList } from '../product-list'
import { shallow } from 'enzyme'

describe('Product-List is being tested', () => {
  const props = {
    match: {
      params: {
        page: 1
      }
    },
    fetchProducts: jest.fn()
  }
  test('renders without crashing', () => {
    let mounted = shallow(<ProductList {...props} />)
  })

})