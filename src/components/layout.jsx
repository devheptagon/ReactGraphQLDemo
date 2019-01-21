import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Wrapper, Container, GridStyles } from './layout.style'
import { Grid, Row, Col } from 'react-bootstrap'
import { Routes } from '../routes'
import { ThemeContext } from '../theme/themes'

class Layout extends Component {
  componentDidCatch(error, info) {
    console.log(error, info) // error handling here
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {
          ({theme}) => <Wrapper theme={theme}>
                    <Grid style={GridStyles.Grid}>
                      <Row>
                        <Col xs={12} md={8} mdPush={2} lg={6} lgPush={3} style={GridStyles.Column}>
                          <Container theme={theme}>
                            {Routes}
                          </Container>
                        </Col>
                      </Row>
                    </Grid>
                  </Wrapper>
        }
      </ThemeContext.Consumer>

    );
  }
}

export default withRouter(Layout)

