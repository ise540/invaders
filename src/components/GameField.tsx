import { useEffect, useRef } from "react"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { hit, move, shoot } from "../store/positionSlice"
import { Bullet } from "./Bullet"
import { Shooter } from "./Shooter"

const StyledField = styled.div`
background-color: #000000;
position:relative;
width: 100vw;
height: 100vh;`

const StyledTarget = styled.div`
    background-color: red; 
    position: absolute; 
    width: 200px;
    height: 200px;
    top: 20px; 
    left: 400px;
`

export const GameField = () => {
    const startPosition = useAppSelector(state => state.shooter.position)
    const dispatch = useAppDispatch()
    const enemy = useRef<HTMLDivElement>(null)
    const bullet = useRef<HTMLDivElement>(null)
    console.log(enemy.current)
    console.log(bullet.current)
    if (enemy.current && bullet.current) {
        const enemyPosition = { xStart: enemy.current.offsetLeft, xEnd: enemy.current.offsetLeft + enemy.current.offsetWidth , yStart: enemy.current.offsetTop + enemy.current.offsetHeight}
    }

    const addKeyEvent = (event: KeyboardEvent) => {
        event.stopPropagation();
        switch (event.key) {
            case "ArrowLeft":
                dispatch(move("Left"))
                break;
            case "ArrowRight":
                dispatch(move("Right"))
                break;
            case " ":
                dispatch(shoot())
                setTimeout(() => dispatch(hit()), 2000)
                break;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", addKeyEvent);
        return () => window.removeEventListener("keydown", addKeyEvent)
    }, [])

    return (
        <StyledField>
            <StyledTarget ref={enemy} />
            <Bullet />
            <Shooter positionLeft={startPosition} ></Shooter>
        </StyledField>
    )
}
