import type {JSX} from 'react'

export default function NewGameButton({ isGameOver, startNewGame }):JSX.Element | null {
    if (!isGameOver) {
        return null
    } else {
        return (
            <button className="new-game" onClick={startNewGame}>
                New Game
            </button>
        )
    }
}