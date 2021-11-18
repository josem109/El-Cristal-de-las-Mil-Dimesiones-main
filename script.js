'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '10';
document.querySelector('.guess').value = 23;*/
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// console.log(secretNumber);
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   if (!guess) {
//     displayMessage('🚫 Not a number');
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       document.querySelector('.guess').value = '';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('💣You lost the game!');
//     }
//   }

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
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉✨✨You Win!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.message').textContent = 'Start guessing...';
// });
var modo = 'idle';
const level = 'normal';
var target = 0;
let monsterArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let monsterPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let typeOfMonster = [1, 2, 3];
function initializeBattle() {
  let monsterQuantity = Math.trunc(Math.random() * 6) + 1;
  let monsterToDelete = 9 - monsterQuantity;
  let monsterPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  restartSelector();
  let a = monsterPosition.splice(8, 1);
  //Delete all Monsters
  /* for (let i = 1; i < 10; i++) {
    document.getElementById(`d1-${i}`).style.display = 'none';
  } */
  //Randomize monster's positions
  for (let i = 1; i <= monsterToDelete; i++) {
    let deleteMonster = Math.trunc(Math.random() * monsterPosition.length) + 1;
    monsterPosition.splice(deleteMonster - 1, 1);
    document.getElementById(`d1-${deleteMonster}`).style.display = 'none';
  }
  //Place Monsters in randomized positions
  /*  for (let i = 0; i < monsterPosition.length; i++) {
    document.getElementById(`d1-${monsterPosition[i]}`).style.display = 'flex';
  } */
  return 'Monters: ' + monsterPosition;
}
function restartSelector() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(`d1-${i}`).style.border = 'none';
  }
}
function getTarget(target) {
  restartSelector();
  document.getElementById(`d1-${target}`).style.border = '7px solid #eee';
}
document.querySelector('.attack').addEventListener('click', function () {
  document.querySelector('.monster_container').style.border = '7px solid #eee';
  modo = 'attack';
});
document.getElementById('d1-1').addEventListener('mouseover', function () {
  target = 1;
  modo === 'attack' && getTarget(1);
});
document.getElementById('d1-2').addEventListener('mouseover', function () {
  target = 2;
  modo === 'attack' && getTarget(2);
});
document.getElementById('d1-3').addEventListener('mouseover', function () {
  target = 3;
  modo === 'attack' && getTarget(3);
});
document.getElementById('d1-4').addEventListener('mouseover', function () {
  target = 4;
  modo === 'attack' && getTarget(4);
});
document.getElementById('d1-5').addEventListener('mouseover', function () {
  target = 5;
  modo === 'attack' && getTarget(5);
});
document.getElementById('d1-6').addEventListener('mouseover', function () {
  target = 6;
  modo === 'attack' && getTarget(6);
});
document.getElementById('d1-7').addEventListener('mouseover', function () {
  target = 7;
  modo === 'attack' && getTarget(7);
});
document.getElementById('d1-8').addEventListener('mouseover', function () {
  target = 8;
  modo === 'attack' && getTarget(8);
});
document.getElementById('d1-9').addEventListener('mouseover', function () {
  target = 9;
  modo === 'attack' && getTarget(9);
});
document.getElementById(`d1-1`).addEventListener('click', function () {
  document.getElementById(`d1-${target}`).style.border = '7px solid red';
  modo = 'idle';
});
console.log(initializeBattle());
