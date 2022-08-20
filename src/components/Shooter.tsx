import { FC } from 'react'
import styled from 'styled-components'

const StyledShooter = styled.div<{dataPosition:number}>`
    background-color: #6aff00;
    position:absolute;
    width: 200px;
    height: 50px;
    bottom: 5vh;
    left: ${(props) => props.dataPosition + "px"};
`

interface ShooterProps {
    positionLeft: number
}

export const Shooter: FC<ShooterProps> = ({ positionLeft }) => {
    return (
        <StyledShooter dataPosition={positionLeft}>

        </StyledShooter>
    )
}
