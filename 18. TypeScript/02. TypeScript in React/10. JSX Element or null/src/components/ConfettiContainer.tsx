import Confetti from "react-confetti"

/*
CHALLENGE: Explictly type the ConfettiContainer component's return value
*/

export default function ConfettiContainer({ isGameWon }) {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}