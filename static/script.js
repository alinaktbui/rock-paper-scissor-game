const buttons = document.querySelectorAll('.btn-circle');
const scoreEl = document.getElementById('score');

const choices = ['rock', 'paper', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    if (userChoice === computerChoice) {
        // draw
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock') 
        || 
        (userChoice === 'rock' && computerChoice === 
        'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        // user won
        updateScore(1);
    } else {
        // user lost
        updateScore(-1);
    }
}

function updateScore(value) {
    score += value;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}
