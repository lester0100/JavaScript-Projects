'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayOnMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If user enters empty value
  if (!guess) {
    displayOnMessage('No guess. Please enter a number.');
  }

  //If users enters a number
  else {
    if (guess >= 0 && guess <= 20) {
      if (guess === secretNumber) {
        document.querySelector('.check').disabled = true;
        displayOnMessage(`You win. ${secretNumber} is the correct number. `);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '#30rem';
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else if (guess > secretNumber) {
        displayOnMessage(`${guess} is greater than the number. Try lower.`);
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        displayOnMessage(`${guess} is less than the number. Try higher.`);
        score--;
        document.querySelector('.score').textContent = score;
      }

      if (score <= 0) {
        displayOnMessage(`You lost. ${secretNumber} is the correct number`);
        document.querySelector('.check').disabled = true;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').textContent = secretNumber;
      }
    } else {
      displayOnMessage(`${guess} is an invalid number. Try again.`);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.check').disabled = false;

  //document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '#15rem';
  //60b347
});
