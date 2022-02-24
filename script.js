let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let gameWinner;

function showGameWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('Player Win the Game');
        gameWinner = 'Player';
    } else {
        console.log('You Lose, Computer Win the Game');
        gameWinner = 'Computer';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    showGameWinner(playerScore, computerScore);
}

function playRound() {
    computerSelection = computerPlay();
    playerSelection = prompt('Insert your selection').toLowerCase();

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log('Player Win');
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        console.log('Player Win');
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        console.log('Player Win');
    } else if (computerSelection === 'rock' && playerSelection === 'scissor') {
        computerScore++;
        console.log('Computer Win');
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        console.log('Computer Win');
    } else if (computerSelection === 'scissor' && playerSelection === 'paper') {
        computerScore++;
        console.log('Computer Win');
    } else if (computerSelection === playerSelection) {
        console.log('Tie');
    }
}

function computerPlay() {
    let randomNumber = Math.round(((Math.random() * 2) + 1));

    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissor';
    }
}

// run
game();

