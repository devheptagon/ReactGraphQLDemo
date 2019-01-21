import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../loading'

describe('Loading is being tested', () => {
  test('renders without crashing', () => {
    let mounted = shallow(<Loading />)  
  })
})

