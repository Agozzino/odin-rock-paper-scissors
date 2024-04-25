console.log("Let's play!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let move = "";

    console.log(choice)

    switch (choice) {
        case 1:
            move = "rock";
            break
        case 2:
            move = "paper";
            break
        case 3:
            move = "scissors";
            break
    }

    console.log("Computer played: "+move)

    return move;
}

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper or Scissors? ");
    console.log("You played: "+choice);
    return choice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++;
        console.log("You lost!") ;
    }
}

while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), getComputerChoice())
}

console.log("Game Ended!")