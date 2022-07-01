'use strict';

let secretNumber= Math.trunc(Math.random()*20) + 1;
let score= 20;
let highScore= 0;

document.querySelector('.check').addEventListener('click', function(){
  const guess= Number(document.querySelector('.guess').value);
  if(!guess || guess > 20 || guess < 0){
    document.querySelector('.message').textContent = 'Introuduce a number between 1 and 20';
  } else if(guess === secretNumber){
    document.querySelector('.message').textContent= '🎉Correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width= '30rem';
    if(score > highScore){
      highScore= score;
      document.querySelector('.highscore').textContent= highScore;
    }
  } else {
    score--;
    if(score <= 0) {
      document.querySelector('.message').textContent= 'You lost';
      score= 0;
    }
    else if(guess > secretNumber) document.querySelector('.message').textContent= 'To high';
    else document.querySelector('.message').textContent= 'To low';
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function(){
  console.log(document.querySelector('body').style.backgroundColor= '#222');
  console.log(document.querySelector('.number').style.width= '15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value= '';
  secretNumber= Math.trunc(Math.random()*20) + 1;
  console.log(secretNumber);
  score= 20;
  document.querySelector('.score').textContent = score;
});