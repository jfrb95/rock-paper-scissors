//Setting up the webpage

const rpsButtons = document.querySelector("#rps-buttons");
rpsButtons.addEventListener("click", playRoundWithHumanSelecton);

const resultsDisplay = document.querySelector("#results-display");

const scoreBoard = function() {
    //this function uses closure
    let scores = {
        "human": 0,
        "computer": 0
    }

    return {
        increment(player) {
            scores[player] += 1;
        },

        announceWinner() {

        },

        resetScore() {
            scores["human"] = 0;
            scores["computer"] = 0;
        },

        getScoreOf(player) {
            return scores[player];
        }
    }
}();

//Functions used to play the game

function playRound(humanChoice, computerChoice) {
    let outcomeText;
    let roundWinner;

    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
            outcomeText = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
            roundWinner = 'human';
    } else if (
        humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock') {
            outcomeText = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
            roundWinner = 'computer';
    } else {
        outcomeText = `${capitalize(computerChoice)} vs ${capitalize(humanChoice)}. It's a tie!`;
        roundWinner = null;
    }

    if (roundWinner) {
        scoreBoard.increment(roundWinner);
    }

    const humanScore = scoreBoard.getScoreOf("human");
    const computerScore = scoreBoard.getScoreOf("computer")

    let score = `The scores are: Human - ${humanScore}, Computer - ${computerScore}.`;

    const outcomeTextNode = document.createTextNode(outcomeText + " " + score);
    const lineBreak = document.createElement("br");
    resultsDisplay.appendChild(outcomeTextNode);
    resultsDisplay.appendChild(lineBreak);

    if (humanScore >= 5) {
        resultsDisplay.textContent = `Human wins ${humanScore} to ${computerScore}. The game has been reset.`
        scoreBoard.resetScore();
    } else if (computerScore >= 5) {
        resultsDisplay.textContent = `Computer wins ${computerScore} to ${humanScore}. The game has been reset.`
        resultsDisplay.appendChild(document.createElement("br"));
        scoreBoard.resetScore();
    }
}


//Utility functions below

function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
}

function playRoundWithHumanSelecton(event) {
    const target = event.target;

    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
}

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