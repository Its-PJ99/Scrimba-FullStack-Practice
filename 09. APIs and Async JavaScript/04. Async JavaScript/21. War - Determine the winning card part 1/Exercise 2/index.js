let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
        })
})
/**
 * Challenge:
 * 
 * Try to determine which of the 2 cards is the "winner" (has higher value)
 * Aces are the card with the highest "score"
 * 
 * In parts:
 * 
 * 1. Create a function that takes 2 card objects as parameters, 
 * `card1` and `card2`. These card objects have a property called
 * `value`, which can be any one of the following strings, in
 * order of rising "score":
 * 
 * "2", "3", "4", "5", "6", "7", "8", "9", 
 * "10", "JACK", "QUEEN", "KING", "ACE"
 * 
 * I.e. "2" is the lowest score and "ACE" is the highest.
 * 
 * The function should determine which of the 2 cards (`card1`
 * or `card2`) has the higher score, or if they have the same score.
 * 
 * Log which card wins (or "It's a tie!" 
 * if they're the same) to the console
 */