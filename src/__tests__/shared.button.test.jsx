import React from 'react'
import { shallow } from 'enzyme'
import Button from '../components/shared/button'

it('renders without crashing', () => {
  let mounted = shallow(<Button />)  
});
