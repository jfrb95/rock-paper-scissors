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
    const choice = prompt("Enter 'rock', 'paper', or 'scissors'");

    if (choice === 'rock' ||
        choice === 'paper' ||
        choice === 'scissors') {
            return choice;
    } else {
        return getHumanChoice();
    }
};

console.log(getHumanChoice());