import React, { Component } from 'react'
import { Wrapper } from './home.style'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Button from '../shared/button'

class Home extends Component {
  render() {
    return (      
      <Wrapper>
        <Jumbotron>                
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>            
              <Button>
                <Link to="/product-list/1">
                  START SAMPLE APPLICATION
                </Link>
              </Button>            
          </p>
        </Jumbotron>
      </Wrapper>   
    )    
  }
}

export default Home
