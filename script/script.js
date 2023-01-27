const userScoreEl = document.getElementById('user-score')

const compScoreEl = document.getElementById('comp-score')

const userChoiceEl = document.getElementById('user-choice')

const compChoiceEl = document.getElementById('comp-choice')

const resultEl = document.getElementById('result')

const resultContainer = document.getElementById ('result-container')


//global variables

let result = '';
let userScore = 0;
let compScore = 0;

//function
const getComputerChoice = function () {

const weapons = ["rock", "paper", "scissors"];

const random = Math.round (Math.random() * (weapons.length - 1))


return weapons[random];
};

const playGame = function (weapon) {
    const userChoice = weapon;
    const compChoice = getComputerChoice();
    if (userChoice === 'rock') {
    if (compChoice === 'rock') {
        result = 'DRAW';
    } else if (compChoice === 'paper') {
        result = 'LOST';
    } else if (compChoice === 'scissors') {
        result = 'WON';
    }
    } else if (userChoice === 'paper') {
    if (compChoice === 'rock') {
        result = 'WON';
    } else if (compChoice === 'paper') {
        result = 'DRAW';
    } else if (compChoice === 'scissors') {
        result = 'LOST';
    }
    } else if (userChoice === 'scissors') {
    if (compChoice === 'rock') {
        result = 'LOST';
    } else if (compChoice === 'paper') {
        result = 'WON';
    } else if (compChoice === 'scissors') {
        result = 'DRAW';
    }
    }

    resultContainer.style.display = 'block';
    userChoiceEl.innerText = `You selected ${userChoice}`;
    compChoiceEl.innerText = `Computer selected ${compChoice}`;
    if (result === 'WON') {
    userScore++;
    resultEl.innerText = 'You WON';
    } else if (result === 'LOST') {
    compScore++;
    resultEl.innerText = 'You Lost';
    } else if (result === 'DRAW') {
    resultEl.innerText = 'Game DRAW';
    }

    userScoreEl.innerText = userScore;
    compScoreEl.innerText = compScore;
};