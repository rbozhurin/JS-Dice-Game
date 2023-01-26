'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currScore0 = document.getElementById('current--0');
let currScore1 = document.getElementById('current--1');

let currentScore, scores, activePlayer, plaiyng;

function inits() {
  currentScore = 0;
  scores = [0, 0];

  activePlayer = 0;
  plaiyng = true;

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  score0.textContent = 0;
  score1.textContent = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;

  plaiyng = true;

  dice.classList.add('hidden');
}

inits();

function changePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

//Rolling dice functionality

rollBtn.addEventListener('click', function () {
  if (plaiyng) {
    const rollNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `${rollNumber}_dots.png`;

    if (rollNumber !== 1) {
      currentScore += rollNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

//Agregate final score

holdBtn.addEventListener('click', function () {
  if (plaiyng) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      plaiyng = false;
      dice.classList.add('hidden');

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      changePlayer();
    }
  }
});

newBtn.addEventListener('click', inits);
