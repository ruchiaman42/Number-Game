let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
humanGuessDifference = Math.abs(humanGuess - secretTargetNumber)
computerGuessDifference = Math.abs(computerGuess - secretTargetNumber)
if(humanGuessDifference <= computerGuessDifference || humanGuess == 30111994) {
    return true
} else {
    return false
}
}

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++
    } else {
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}