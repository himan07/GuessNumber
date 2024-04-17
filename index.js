"use strict";

// document.addEventListener("DOMContentLoaded", function() {

//     document.querySelector(".guess").addEventListener("click", function() {
//       console.log(document.querySelector(".input_field").value);
//     });
//   });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.addEventListener("DOMContentLoaded", function () {
  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };

  document.querySelector(".guess").addEventListener("click", function () {
    const guess = Number(document.querySelector(".input_field").value);
    console.log(guess, typeof guess);

    if (!guess) {
      displayMessage("No Number");
    } else if (guess === secretNumber) {
      displayMessage("Correct Number");
      document.querySelector(".input_field").textContent = secretNumber;

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".input_field").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "Too High" : "Too Low");
        score--;
        document.querySelector(".score").textContent = score ? score : 20;
      }else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
        document.querySelector("body").style.backgroundColor = "red";

      }
    }
  });
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
      displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.input_field').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
