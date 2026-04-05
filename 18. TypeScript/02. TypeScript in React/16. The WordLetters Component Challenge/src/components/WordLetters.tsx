/*
CHALLENGE 1: Explictly type the WordLetter's component's return value
CHALLENGE 2: Type the component's props using a custom Type
CHALLENGE 3: Explictly type any variables in the component
*/

import { clsx } from "clsx"

export default function WordLetters({ currentWord, guessedLetters, isGameLost }) {
    return (
        <section className="word">
            {currentWord.split("").map((letter, index) => {
                const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
                const letterClassName = clsx(
                    isGameLost && !guessedLetters.includes(letter) && "missed-letter"
                )
                return (
                    <span key={index} className={letterClassName}>
                        {shouldRevealLetter ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    )
}