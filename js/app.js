
 // a list that holds all of your cards

const icons=["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o","fa fa-paper-plane-o",
              "fa fa-anchor","fa fa-anchor","fa fa-bolt","fa fa-bolt","fa fa-leaf","fa fa-leaf",
              "fa fa-bicycle","fa fa-bicycle","fa fa-bomb","fa fa-bomb","fa fa-cube","fa fa-cube"];

const stars = document.querySelector('.stars').childNodes;
const starsForRate = document.querySelector('.stars');
const cardsContainer = document.querySelector(".deck");
const timer = document.querySelector(".timer");

let liveTimer
    totalSeconds = 0;
timer.innerHTML = totalSeconds+"s";


let timeCounter;
let timerOn = false;

// Restart
const restart = document.querySelector(".restartGame");

// Card array
let openedcards=[];
let matchedcards=[];

// First Click
let isFirstClick = true;

// start game

function start(){

  let shuffleIcons=shuffle(icons);
  for (let i = 0 ; i < icons.length; i++) {
      const card = document.createElement("li");

      card.classList.add("card");
      card.innerHTML = `<i class="${icons[i]}"></i>`;
      cardsContainer.appendChild(card);

      click(card);
    }
}

function click(card){

  card.addEventListener("click",function(){

    if (isFirstClick){
      startTimer();
      isFirstClick= false;
    }

      const currentcard = this;
      const previouscard = openedcards[0];

      if(openedcards.length ===1){

          card.classList.add("open","show","dontMatch");
          openedcards.push(this);

          compare(currentcard, previouscard);

      } else{

          currentcard.classList.add("open","show","dontMatch");
          openedcards.push(this);
        }

  });
}

function compare(currentcard, previouscard){

    if (currentcard.innerHTML=== previouscard.innerHTML){

      currentcard.classList.add("match");
      previouscard.classList.add("match");

      matchedcards.push(currentcard,previouscard);

      openedcards = [];

      message();

    }else {

      setTimeout(function(){
        currentcard.classList.remove("open","show","dontMatch");
        previouscard.classList.remove("open","show","dontMatch");
      },600);

    openedcards = [];
  }
// Add new move
    addMoves();

}

// calculate number of moves

const movesContainer = document.querySelector(".moves");

let moves = 0;
movesContainer.innerHTML = 0;
function addMoves(){
  moves++;
  movesContainer.innerHTML = moves;

  rating();
}

function message() {
    if(matchedcards.length === icons.length) {

        // Stop our timer
        stopTimer();
        alert("Congrats!!! You Did it play again");

    }
}
// Rating system

function rating() {

  if (moves === 12){
    stars[5].classList.add("gray");
  } else if (moves === 20){
    stars[3].classList.add("gray");
  }
}

//Start timer

function startTimer(){
  liveTimer=setInterval(function(){
    totalSeconds++;
    timer.innerHTML=totalSeconds+"s";
  },1000)
}

// Stop timer

function stopTimer(){
  clearInterval(liveTimer);
}


// Restart Button
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click",function(){
  cardsContainer.innerHTML="";

  restartGame();
});

// Restart Game

function restartGame(){

  moves = 0;
  movesContainer.innerHTML = moves;

  matchedcards = [];


  start();

  stopTimer();
  isFirstClick=true;
  totalSeconds=0;
  timer.innerHTML=totalSeconds+"s";

  stars[5].classList.remove("gray");
  stars[3].classList.remove("gray");
}




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {

      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }

      return array;
  }



// start Game
start();
