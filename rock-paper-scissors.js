function getComputerChoice() {
    const roll = Math.random();
    let result = -1;

    if (roll < 0.33) {
        result = "rock";
    } else if (roll < 0.66) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return result;
}

function getHumanChoice() {
    const choice = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();

    if (choice === 'rock' ||
        choice === 'paper' ||
        choice === 'scissors') {
            return choice;
    } else {
        return getHumanChoice();
    }
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let outcome;

    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
            outcome = 'win';
    } else if (
        humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
            outcome = 'lose';
    } else {
        outcome = 'draw';
    }

    console.log(humanChoice, computerChoice);
    console.log(outcome);
}

playRound(getHumanChoice(), getComputerChoice());