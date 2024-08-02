const getComputerChoice = function() {
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

console.log(getComputerChoice());