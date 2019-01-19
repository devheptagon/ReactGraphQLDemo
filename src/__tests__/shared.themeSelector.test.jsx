import React from 'react'
import { shallow } from 'enzyme'
import ThemeSelector from '../components/shared/themeSelector'

it('renders without crashing', () => {
    let mounted = shallow(<ThemeSelector />)  
});
