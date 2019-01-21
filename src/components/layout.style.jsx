import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.mainBackgroundColor};
  padding: 20px;
`

export const Container = styled.div`
  width: 100%;
  height: 75vh;
  padding: 15px;   
  border-radius: 10px;
  background: ${props => props.theme.containerBackgroundColor};
`

export const GridStyles = {
  Column: {
    height: '100%'
  }  
}