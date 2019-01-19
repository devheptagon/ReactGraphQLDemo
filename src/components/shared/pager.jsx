import React from 'react'
import PropTypes from 'prop-types'
import { PagerContainer } from './shared.style'
import Button from './button'

export const Pager = (props) => <PagerContainer>
    <Button onClick={props.onPrevious}>&lt;&lt;  Previous</Button>
    <Button onClick={props.onNext}>Next &gt;&gt;</Button>
</PagerContainer>

Pager.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
}

export default Pager