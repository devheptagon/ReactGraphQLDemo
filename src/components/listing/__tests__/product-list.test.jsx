import React from 'react'
import { shallow } from 'enzyme'
import ProductList from '../product-list'

it('renders without crashing', () => {
  let mounted = shallow(<ProductList />)
});
