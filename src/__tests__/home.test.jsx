import React from 'react'
import { shallow } from 'enzyme'
import Home from '../components/home/home'

it('renders without crashing', () => {
  let mounted = shallow(<Home />)  
});
