function test () {
  console.log('bitches');
}
// card options
  const cardArray2 = [
    {
      name: 'G',
      img: 'src/images/letterg.jpg',
      lsound: 'src/sounds/g.mp3'
    },
    {
      name: 'H',
      img: 'src/images/letterh.png',
      lsound: 'src/sounds/h.mp3'
    },
    {
      name: 'I',
      img: 'src/images/letteri.jpg',
      lsound: 'src/sounds/i.mp3'
    },
    {
      name: 'J',
      img: 'src/images/letterj.jpg',
      lsound: 'src/sounds/j.mp3'
    },
    {
      name: 'K',
      img: 'src/images/letterk.jpg',
      lsound: 'src/sounds/k.mp3'
    },
    {
      name: 'L',
      img: 'src/images/letterl.png',
      lsound: 'src/sounds/l.mp3'
    },
    {
      name: 'G',
      img: 'src/images/letterg.jpg',
      lsound: 'src/sounds/g.mp3'
    },
    {
      name: 'H',
      img: 'src/images/letterh.png',
      lsound: 'src/sounds/h.mp3'
    },
    {
      name: 'I',
      img: 'src/images/letteri.jpg',
      lsound: 'src/sounds/i.mp3'
    },
    {
      name: 'J',
      img: 'src/images/letterj.jpg',
      lsound: 'src/sounds/j.mp3'
    },
    {
      name: 'K',
      img: 'src/images/letterk.jpg',
      lsound: 'src/sounds/k.mp3'
    },
    {
      name: 'L',
      img: 'src/images/letterl.png',
      lsound: 'src/sounds/l.mp3'
    }
];

  function playSound () {
    let cardId = this.getAttribute('data-id');
    let audio = new Audio();
    audio.src = cardArray2[cardId].lsound;
    audio.play();
  }

  // when level is complete this function will load next level
function loadScript (url) {
  const script3 = document.createElement('script');
  script3.setAttribute('id', 'lvl3');
  const lvl2Script = document.getElementById('lvl2');
  // script.type = 'text/javascript';
  script3.src = url;
  body2.appendChild(script3);
  lvl2Script.remove();

}
  console.log(cardArray2);

  // this algorithm randomizes the array
  cardArray2.sort(() => 0.5 - Math.random());

  const grid2 = document.querySelector('.grid');
  const level2 = document.getElementById('level');
  level2.innerHTML = 2;
  const body2 = document.getElementsByTagName('body')[0];
  // const resultDisplay = document.querySelector('#result');
  // let cardsChosen = [];
  // let cardsChosenIds = [];
  // let cardsWon = [];
  // function creates a board of 12 blank cards and adds an eventlistener
  // to each one which will be used to flip the cards

  function createBoard () {
    for (let i = 0; i < cardArray2.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'src/images/back2.png');
      card.setAttribute('data-id', i);
      card.setAttribute('class', 'card');
      card.addEventListener('click', flipCard);
      card.addEventListener('click', playSound);
      grid2.appendChild(card);
      body.style.backgroundImage = "url('src/backgrounds/lvl2.jpg')";
    }
  }
  // flip the card to reveal it
  function flipCard () {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray2[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray2[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  // check to see if two cards are a match
  function checkForMatch () {
    const cards = document.querySelectorAll('img');
    let optOneId = cardsChosenIds[0];
    let optTwoId = cardsChosenIds[1];
    if (optOneId === optTwoId) {
      alert('You clicked on the same card twice');
      cards[optOneId].setAttribute('src', 'src/images/back2.png');
      cards[optTwoId].setAttribute('src', 'src/images/back2.png');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You've found a match");
      cards[optOneId].removeAttribute('src');
      cards[optTwoId].removeAttribute('src');
      cards[optOneId].removeEventListener('click', flipCard);
      cards[optTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optOneId].setAttribute('src', 'src/images/back2.png');
      cards[optTwoId].setAttribute('src', 'src/images/back2.png');
      alert('These cards do not match');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;
    if (cardsWon.length === cardArray2.length) {
      grid2.remove();
      loadScript('src/lvl3.js');
      const div2 = document.createElement('div');
      body2.appendChild(div2);
      div2.setAttribute('class', 'grid');
    }
  }

  createBoard();
