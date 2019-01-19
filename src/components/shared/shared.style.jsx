import styled from 'styled-components'

export const ButtonContent = styled.div`    
    min-width: 100%;        
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
    & > a {
        color: ${props => props.theme.buttonTextColor};
        text-decoration: none;
        font-weight: bold;
    }    
`

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        width: 100px;
        height: 100px;
    }
`

export const PagerContainer = styled.div`    
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ThemeSelectorWrapper = styled.div`    
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;    
    font-weight: bold;
    & input {
        margin-left: 5px;
        margin-right: 20px;
        cursor: pointer
    }
`
