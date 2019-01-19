import React from 'react'
import 'core-js/es6/map'
import 'core-js/es6/set'
import ReactDOM from 'react-dom'

class Entry extends React.Component {
    render () {
        return <div>Hello World!</div>
    }
}

ReactDOM.render(<Entry />, document.getElementById('root'))
