import { useEffect, useState } from "react"
import { useEvent } from "../../utils/keyDownEvent"
import { handleSwipeRight } from "../../utils/movements"
import Board from "../Board"

const Game = () => {
    const [gameState, setGameState] = useState(new Array(16).fill(0))
    const UP_ARROW = 38
    const DOWN_ARROW = 40
    const LEFT_ARROW = 37
    const RIGHT_ARROW = 39

    const initialize = () => {
        let newGrid = [...gameState]
        newGrid = addNumber(newGrid)
        newGrid = addNumber(newGrid)
        setGameState(newGrid)
    }

    const addNumber = (currentGrid: number[]) => {
        let newGrid = [...currentGrid]
        let added = false

        while (!added) {
            let position = Math.floor(Math.random() * 16)
            if (newGrid[position] === 0) {
                newGrid[position] = Math.random() > 0.5 ? 2 : 4
                added = true
            }
        }

        return newGrid
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.keyCode) {
            case UP_ARROW:
                handleSwipeUp()
                break;
            case DOWN_ARROW:
                handleSwipeDown()
                break;
            case LEFT_ARROW:
                handleSwipeLeft()
                break;
            case RIGHT_ARROW:
                handleSwipeRight()
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    useEvent("keydown", handleKeyDown)

    return (
        <div className={'game'}>
            <Board currentState={gameState} />
        </div>
    )
}
export default Game