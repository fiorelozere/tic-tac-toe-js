// c\u      rock        paper       scissors   rock = 0 paper = 1 scissors = 2
//rock      'draw'      'user'      'computer'
//paper     'computer'  'draw'      'user'
//scissors  'user'      'computer'  'draw'
let userScore = 0;
let computerScore = 0;

const checkWinner = [
    ['draw', 'user', 'computer'],
    ['computer', 'draw', 'user'],
    ['user', 'computer', 'draw']
]

function displayComputerChoice(computerChoice) {
    const computerButtons = document.querySelectorAll('.computerChoice');

    for(let i = 0; i < computerButtons.length; i++){
        if(i !== computerChoice) {
            computerButtons[i].classList.add('disabled');
        }
    }
}

function cleanComputerChoice() {
    const computerButtons = document.querySelectorAll('.computerChoice');
    for(button of computerButtons) {
        button.classList.remove('disabled');
    }
}

function displayWinner(winner) {
    const winnerElement = document.getElementById('winner');
    winnerElement.innerText = winner;
}

function increasePoints(winner) {
    if(winner === 'user') {
        userScore += 1;
    }
    if(winner === 'computer') {
        computerScore += 1;
    }
}

function updatePoints(userSc, computerSc) {
    const userScoreElement = document.getElementById('userScore');
    const computerScoreElement = document.getElementById('computerScore');
    userScoreElement.innerText = userSc;
    computerScoreElement.innerText = computerSc;
}

function changeBackground(winner) {
    const body = document.getElementById('body');
    if(winner === 'user') {
        body.style.background = '#90ee90';
    }
    if(winner ==='draw') {
        body.style.background = '#ffffb7';
    }
    if(winner === 'computer') {
        body.style.background = '#ff7f7f';
    }
}

function reset() {
    const game = document.getElementById('game');
    const winnerInterface = document.getElementById('winnerInterface');
    const body = document.getElementById('body');
    body.style.background = "#fff"
    userScore = 0;
    computerScore = 0;
    cleanComputerChoice();
    updatePoints(userScore, computerScore);
    displayWinner('');
    game.style.display = 'block';
        winnerInterface.style.display = 'none';
}

function checkChamp(){
    const game = document.getElementById('game');
    const winnerInterface = document.getElementById('winnerInterface');
    const champ = document.getElementById('theWinnerIs');
    if(userScore === 5){
        game.style.display = 'none';
        winnerInterface.style.display = 'block';
        champ.innerText = 'User';
    }
    if(computerScore === 5){
        game.style.display = 'none';
        winnerInterface.style.display = 'block';
        champ.innerText = 'Computer';
    }
}

function getUserInput(userChoice) {
    const computerChoice = Math.floor(Math.random() * 3);
    const winner = checkWinner[computerChoice][userChoice];
    cleanComputerChoice();
    displayComputerChoice(computerChoice);
    displayWinner(winner);
    increasePoints(winner);
    updatePoints(userScore, computerScore);
    changeBackground(winner);
    checkChamp();
}



