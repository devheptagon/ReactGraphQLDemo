import React from 'react'
import { shallow } from 'enzyme'
import Empty from '../empty'

it('renders without crashing', () => {
  let mounted = shallow(<Empty />)
});
