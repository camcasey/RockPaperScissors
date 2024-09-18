
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice = prompt("Invalid! Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function displayScore(){
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

function finalScore(){
    if(humanScore === computerScore){
        console.log(`It's a tie! Human: ${humanScore} | Computer: ${computerScore}`);
    }
    else if( humanScore > computerScore){
        console.log(`You win! Human: ${humanScore} | Computer: ${computerScore}`);
    }
    else{
        console.log(`You lose! Human: ${humanScore} | Computer: ${computerScore}`);
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both players chose ${humanChoice}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++;
    }
    displayScore();
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    finalScore();
}
playGame();