import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../components/shared/loading'

it('renders without crashing', () => {
  let mounted = shallow(<Loading />)  
});
