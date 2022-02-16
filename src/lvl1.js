// document.addEventListener('DOMContentLoaded', () => {
// card options
  const cardArray1 = [
    {
      name: 'A',
      img: 'src/images/lettera.jpg',
      lsound: 'src/sounds/a.mp3'
    },
    {
      name: 'B',
      img: 'src/images/letterb.jpg',
      lsound: 'src/sounds/b.mp3'
    },
    {
      name: 'C',
      img: 'src/images/letterc.jpg',
      lsound: 'src/sounds/c.mp3'
    },
    {
      name: 'D',
      img: 'src/images/letterd.jpg',
      lsound: 'src/sounds/d.mp3'
    },
    {
      name: 'E',
      img: 'src/images/lettere.jpg',
      lsound: 'src/sounds/e.mp3'
    },
    {
      name: 'F',
      img: 'src/images/letterf.png',
      lsound: 'src/sounds/f.mp3'
    },
    {
      name: 'A',
      img: 'src/images/lettera.jpg',
      lsound: 'src/sounds/a.mp3'
    },
    {
      name: 'B',
      img: 'src/images/letterb.jpg',
      lsound: 'src/sounds/b.mp3'
    },
    {
      name: 'C',
      img: 'src/images/letterc.jpg',
      lsound: 'src/sounds/c.mp3'
    },
    {
      name: 'D',
      img: 'src/images/letterd.jpg',
      lsound: 'src/sounds/d.mp3'
    },
    {
      name: 'E',
      img: 'src/images/lettere.jpg',
      lsound: 'src/sounds/e.mp3'
    },
    {
      name: 'F',
      img: 'src/images/letterf.png',
      lsound: 'src/sounds/f.mp3'
    }
  ];

 // this function adds sound when you click on a card
  function playSound () {
    let cardId = this.getAttribute('data-id');
    let audio = new Audio();
    audio.src = cardArray1[cardId].lsound;
    audio.play();
  }
  // when level is complete this function will load next level
function loadScript (url) {
  // const body = document.getElementsByTagName('body')[0];
  const script2 = document.createElement('script');
  script2.setAttribute('id', 'lvl2');
  const lvl1Script = document.getElementById('lvl1');
  // script.type = 'text/javascript';
  script2.src = url;
  body.appendChild(script2);
  lvl1Script.remove();
}
console.log(cardArray1);

  // this algorithm randomizes the array
  cardArray1.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const level = document.getElementById('level');
level.innerHTML = 1;
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
const body = document.getElementsByTagName('body')[0];

// restart the game
const reset = document.querySelector('.button');
reset.addEventListener('click', restart);
function restart () {
  window.location.reload();
  return false;
}
// function creates a board of 12 blank cards and adds an eventlistener
// to each one which will be used to flip the cards
function createBoard () {
  for (let i = 0; i < cardArray1.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'src/images/back2.png');
    card.setAttribute('data-id', i);
    card.setAttribute('class', 'card');
    card.addEventListener('click', flipCard);
    card.addEventListener('click', playSound);
    grid.appendChild(card);
  }
}
// flip the card to reveal it
  function flipCard () {
    let cardId = this.getAttribute('data-id');
    // console.log(cardArray1[cardId]);
    cardsChosen.push(cardArray1[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray1[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  // check to see if two cards are a match
  function checkForMatch () {
    // console.log(cardsChosen);
    const cards = document.querySelectorAll('img');
    let optOneId = cardsChosenIds[0];
    let optTwoId = cardsChosenIds[1];
    //  if the same card is clicked twice
    if (optOneId === optTwoId) {
      alert('You clicked on the same card twice');
      cards[optOneId].setAttribute('src', 'src/images/back2.png');
      cards[optTwoId].setAttribute('src', 'src/images/back2.png');
      // what happens when a match is found
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You've found a match");
      cards[optOneId].removeAttribute('src');
      cards[optTwoId].removeAttribute('src');
      cards[optOneId].removeEventListener('click', flipCard);
      cards[optTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      // no match is found and cards are flipped back over
    } else {
      cards[optOneId].setAttribute('src', 'src/images/back2.png');
      cards[optTwoId].setAttribute('src', 'src/images/back2.png');
      alert('These cards do not match');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    // adding to the score board
    resultDisplay.innerHTML = cardsWon.length;
    // all matches are found load lvl 2
    if (cardsWon.length === cardArray1.length / 2) {
      grid.remove();
      loadScript('src/lvl2.js');
      const div = document.createElement('div');
      body.appendChild(div);
      div.setAttribute('class', 'grid');
    }
  }
  createBoard();

// });
