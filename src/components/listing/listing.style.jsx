import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;    
`

export const List = styled.div`
    height: 90%;
    & div:nth-child(2) {
        border-radius: 10px 10px 0 0
    };
    & div:last-child {
        border-radius: 0 0 10px 10px
    };
    @media (max-height: 700px) {
        overflow-y: scroll
    }    
`

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight: ${props => props.isHeaderRow ? 'bold': 'normal'};        
    ${props => props.isHeaderRow && 'text-transform: uppercase'};
    background: ${props => props.isHeaderRow ? props.theme.headerRowBackground: props.theme.rowBackground};            
    border-bottom: 1px dotted ${props => props.theme.rowBorderColor};
    &: hover {
        background: ${props => !props.isHeaderRow && props.theme.rowHoverBackground};
        color: ${props => !props.isHeaderRow && props.theme.rowHoverColor};
    };
    &: last-child {
        border-bottom: 0;
    };
    & div {
        flex: 1;        
    }; 
    & div:nth-child(2) {
        flex: 3;
    };
    & div:last-child {
        text-align: right;      
        font-weight: bold;  
    };
    @media (max-width: 600px) {
        font-size: small;
        & div {
            overflow: hidden;
        };
        & div:first-child {
            display: none
        }
    }    
`

export const ListItemField = styled.div`    
    padding: 8px; 
`

export const EmptyContainer = styled.div`
    padding: 50px;
    font-size: 30px;
    text-align: center;   
`