import React from 'react'
import 'core-js/es6/map'
import 'core-js/es6/set'
import ReactDOM from 'react-dom'
import Layout from './components/layout'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'
import { rootSaga } from './sagas/rootSaga'
import createStore from './redux/store'
import { ThemeContext, ThemeList } from './theme/themes'

const store = createStore(rootReducer, rootSaga)

class Entry extends React.Component {
    toggleTheme = (newTheme) => {
        let container = {...this.state.themeContainer, theme: newTheme}
        this.setState({ themeContainer: container})
    }

    state = {
        themeContainer: {
            theme: ThemeList.LightTheme, 
            toggleTheme: this.toggleTheme
        }
    }

    render () {
        return <ThemeContext.Provider value={this.state.themeContainer}>
            <Provider store={store}>
                <Router>
                    <Layout />
                </Router>
            </Provider>
        </ThemeContext.Provider>
    }
}

ReactDOM.render(<Entry />, document.getElementById('root'));