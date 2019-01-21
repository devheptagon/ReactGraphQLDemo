import React from 'react'
import { shallow } from 'enzyme'
import Pager from '../pager'

describe('Pager is being tested', () => {
    let mountedPager = null

    beforeAll(() => {
        const onPrevious = jest.fn()
        const onNext = jest.fn()
        mountedPager = shallow(<Pager onNext={onNext} onPrevious={onPrevious} />) 
    })

    test('renders without crashing', () => {

    })

    test('has previous and next buttons', () => {        
        const buttons = mountedPager.find('Button')
        expect(buttons.length).toBe(2)
    })
})

