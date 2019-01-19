import React from 'react'
import { shallow } from 'enzyme'
import Pager from '../components/shared/pager'

it('renders without crashing', () => {
    const onPrevious = jest.fn()
    const onNext = jest.fn()
    let mounted = shallow(<Pager onNext={onNext} onPrevious={onPrevious} />)  
});
