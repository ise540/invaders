import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useAppSelector } from '../hooks/redux'

const goUp = keyframes`
    from {
        bottom: 10vh;
    }
    to {
        bottom: 100vh;
    }
`

const StyledBullet = styled.div<{ isShooting: boolean, currentPosition: number }>`
    background-color: #1aff00;
    width: 10px;
    height: 12px;
    display:${props => props.isShooting ? "inline-block" : "none"};
    bottom: 10vh;
    position: absolute;
    left: ${props => props.currentPosition + 100 + "px"};
    animation: ${goUp} 2s linear infinite; 
`


export const Bullet = () => {
    const isShooting = useAppSelector(state => state.shooter.shoot)
    const currentPosition = useAppSelector(state => state.shooter.bulletPosition)
    return (
        <StyledBullet isShooting={isShooting} currentPosition={currentPosition} >

        </StyledBullet>
    )
}
