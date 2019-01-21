import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../loading'

test('renders without crashing', () => {
  let mounted = shallow(<Loading />)  
})

