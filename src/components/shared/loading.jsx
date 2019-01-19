import React from 'react'
import { LoadingContainer } from './shared.style'
import loadingIcon from '../../assets/loading.gif'

export const Loading = () => <LoadingContainer>
    <img src={loadingIcon} alt='loading icon' />
</LoadingContainer>

export default Loading