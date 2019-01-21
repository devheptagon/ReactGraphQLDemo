import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../loading'

describe('Loading is being tested', () => {
  test('renders without crashing', () => {
    let mounted = shallow(<Loading />)  
  })

  test('renders a loading image', () => {
    let mounted = shallow(<Loading />)  
    expect(mounted.html()).toContain('loading.gif')
  })
})


