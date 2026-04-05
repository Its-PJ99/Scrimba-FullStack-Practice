const playerGuess = 3
const correctAnswer = 6

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

let message = ''
if (playerGuess === correctAnswer) {
    message = 'Correct!'
}
else {
    message = 'Wrong!'
}

console.log(message)