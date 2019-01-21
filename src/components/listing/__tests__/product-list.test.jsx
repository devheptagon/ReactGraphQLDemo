import React from 'react'
import { ProductList } from '../product-list'
import { shallow, mount } from 'enzyme'
import { ThemeList, ThemeContext } from '../../../theme/themes'

describe('Product-List is being tested', () => {
  const history = []
  const props = {
    match: {
      params: {
        page: 1
      }
    },
    fetchProducts: (page) => history.push(page),
    history: []
  }

  test('renders without crashing', () => {
    let mounted = shallow(<ProductList {...props} />)
  })

  test('previous button pushes correct url to history', () => {

    const mounted = mount(<ThemeContext.Provider value={ThemeList.DarkTheme}>      
        <ProductList {...props} />
    </ThemeContext.Provider>)
    
    const buttons = mounted.find('button')
    expect(buttons.length).toBe(2)
    
    const previousButton = buttons.at(0)
    previousButton.simulate('click')
    expect(history.pop()).toBe(1)

  })

  
  test('next button pushes correct url to history', () => {

    const mounted = mount(<ThemeContext.Provider value={ThemeList.DarkTheme}>      
        <ProductList {...props} />
    </ThemeContext.Provider>)
    
    const buttons = mounted.find('button')
    const nextButton = buttons.at(1)
    nextButton.simulate('click')
    nextButton.simulate('click')
    expect(history.pop()).toBe(2)
  })

})