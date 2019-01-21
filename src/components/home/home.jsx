import React, { Component } from 'react'
import { Wrapper } from './home.style'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <p>
            This is a sample React.JS application fetching data from a public GraphQL server for demo purposes.                       
          </p>
          <p>
            <Link to="/product-list/1">
              START SAMPLE APPLICATION
            </Link>
          </p>
        </Jumbotron>
      </Wrapper>
    )
  }
}

export default Home
