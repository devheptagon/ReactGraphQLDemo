import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContent } from './shared.style'
import { Button as BootstrapButton} from 'react-bootstrap'
import { ThemeContext } from '../../theme/themes'

const Button = (props) => <BootstrapButton bsStyle="primary" {...props}>    
    <ThemeContext.Consumer>
        { 
            ({theme}) => <ButtonContent theme={theme}>{props.children}</ButtonContent> 
        }
    </ThemeContext.Consumer>
</BootstrapButton>

Button.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.object
}


export default Button