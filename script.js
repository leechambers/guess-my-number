'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
const startingScore = 20;

let secretNumber = generateSecretNumber();
let score = startingScore;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

//document.querySelector('.number').textContent = secretNumber;

// check button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  if (!guess) {
    // when there is no input
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // when player wins
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // when guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      score = 0;
      displayScore(score);
    }
  }
});

// again button functionality
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateSecretNumber();
  score = startingScore;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
