'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '✨Correct Number';
document.querySelector('.number').textContent = '10';
document.querySelector('.guess').value = 23;*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('🚫 Not a number');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      document.querySelector('.guess').value = '';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣You lost the game!');
    }
  }

  //   else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     document.querySelector('.guess').value = '';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💣You lost the game!';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.guess').value = '';
  //   } else {
  //     document.querySelector('.message').textContent = '💣You lost the game!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉✨✨You Win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});
