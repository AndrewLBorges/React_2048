import { useState } from "react"
import Board from "../Board"

const Game = () => {
    const [gameState, setGameState] = useState(new Array(16).fill(0))

    return (
        <div className={'game'}>
            <Board currentState={gameState} />
        </div>
    )
}
export default Game