import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import { ThemeList, ThemeContext } from '../../../theme/themes'
import ProductListItem from '../product-list-item'
import rootReducer from '../../../redux/rootReducer'
import { rootSaga } from '../../../sagas/rootSaga'
import createStore from '../../../redux/store'

describe('Product-list-item is being tested', () => {
  let product = {
    unitPrice: 100
  }
  const store = createStore(rootReducer, rootSaga)

  test('renders without crashing', () => {
    const mounted = shallow(<ProductListItem product={product} />)
  })

  test('renders header item properly', () => {
    const mounted = mount(<ThemeContext.Provider value={ThemeList.DarkTheme}>
      <Provider store={store}>
        <ProductListItem product={product} isHeaderRow={true} />
      </Provider>
    </ThemeContext.Provider>)

    const item = mounted.find('ListItem')    
    expect(item.length).toBe(1)
    expect(item.at(0).text()).toBe('unitPrice')
  })

  test('renders regular item properly', () => {
    const mounted = mount(<ThemeContext.Provider value={ThemeList.DarkTheme}>
      <Provider store={store}>
        <ProductListItem product={product} isHeaderRow={false} />
      </Provider>
    </ThemeContext.Provider>)

    const item = mounted.find('ListItem')    
    expect(item.length).toBe(1)
    expect(item.at(0).text()).toBe('£100.00')
  })
})

