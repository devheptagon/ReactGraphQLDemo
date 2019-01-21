import React from 'react'
import { shallow } from 'enzyme'
import ThemeSelector from '../theme-selector'

it('renders without crashing', () => {
    let mounted = shallow(<ThemeSelector />)  
});
