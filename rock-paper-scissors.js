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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;



    if (humanScore > computerScore) {
        console.log(`Congratulations, you win!`);
    } else if (computerScore > humanScore) {
        console.log(`Unlucky! You lose.`)
    } else {
        console.log(`It's a draw overall!`)
    }

    //Nested functions below

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

        console.log(outcomeText);
        return roundWinner;
    }
}

playGame();

//Utility functions below

function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
}
