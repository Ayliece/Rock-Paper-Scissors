let computerChoiceDisplay = document.getElementById('computer-choice');
let userScore = 0
let computerScore = 0
let computerChoice;

let computerScoreDisplay = document.getElementById('computerScore')
let userScoreDisplay = document.getElementById('userScore')
const playerChoice = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userchoice;

const getResult = () => {
    if (computerChoice === userchoice) {
        resultDisplay.innerHTML = 'its a draw!'
    } else if (computerChoice === 'rock' && userchoice === 'paper') {
        resultDisplay.innerHTML = 'you win!';
        userScoreDisplay.innerHTML = userScore += 1;
    }
    else if (computerChoice === 'paper' && userchoice === 'rock') {
        resultDisplay.innerHTML = 'you lose!'
        computerScoreDisplay.innerHTML = computerScore += 1;
    }
    else if (computerChoice === 'paper' && userchoice === 'scissors') {
        resultDisplay.innerHTML = 'you win!'
        userScoreDisplay.innerHTML = userScore += 1;
    }
    else if (computerChoice === 'scissors' && userchoice === 'paper') {
        resultDisplay.innerHTML = 'you lose!'
        computerScoreDisplay.innerHTML = computerScore += 1;
    }
    else if (computerChoice === 'rock' && userchoice === 'scissors') {
        resultDisplay.innerHTML = 'you lose!'
        computerScoreDisplay.innerHTML = computerScore += 1;
    }
    else if (computerChoice === 'scissors' && userchoice === 'paper') {
        resultDisplay.innerHTML = 'you lose!'
        computerScoreDisplay.innerHTML = computerScore += 1;
    }
    else if (computerChoice === 'scissors' && userchoice === 'rock') {
        resultDisplay.innerHTML = 'you win!'
        userScoreDisplay.innerHTML = userScore += 1;
    }
}
const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerChoice = 'rock'
    } else if (random === 1) {
        computerChoice = 'paper'
    } else if (random === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice

};
possibleChoice.forEach((possible) => {
    possible.addEventListener('click', (e) => {
        userchoice = e.target.id
        playerChoice.innerHTML = userchoice
        getComputerChoice();
        getResult();
    })
});

console.log('hi')
console.log('this is the new branch')