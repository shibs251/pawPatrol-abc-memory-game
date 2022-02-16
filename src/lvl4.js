function test () {
  console.log('bitches');
}
// card options
  const cardArray4 = [
    {
      name: 'T',
      img: 'src/images/lettert.jpg',
      lsound: 'src/sounds/t.mp3'
    },
    {
      name: 'U',
      img: 'src/images/letteru.jpg',
      lsound: 'src/sounds/u.mp3'
    },
    {
      name: 'V',
      img: 'src/images/letterv.jpg',
      lsound: 'src/sounds/v.mp3'
    },
    {
      name: 'W',
      img: 'src/images/letterw.jpg',
      lsound: 'src/sounds/w.mp3'
    },
    {
      name: 'X',
      img: 'src/images/letterx.jpg',
      lsound: 'src/sounds/x.mp3'
    },
    {
      name: 'Y',
      img: 'src/images/lettery.jpg',
      lsound: 'src/sounds/y.mp3'
    },
    {
      name: 'Z',
      img: 'src/images/letterz.png',
      lsound: 'src/sounds/z.mp3'
    },
    {
      name: 'T',
      img: 'src/images/lettert.jpg',
      lsound: 'src/sounds/t.mp3'
    },
    {
      name: 'U',
      img: 'src/images/letteru.jpg',
      lsound: 'src/sounds/u.mp3'
    },
    {
      name: 'V',
      img: 'src/images/letterv.jpg',
      lsound: 'src/sounds/v.mp3'
    },
    {
      name: 'W',
      img: 'src/images/letterw.jpg',
      lsound: 'src/sounds/w.mp3'
    },
    {
      name: 'X',
      img: 'src/images/letterx.jpg',
      lsound: 'src/sounds/x.mp3'
    },
    {
      name: 'Y',
      img: 'src/images/lettery.jpg',
      lsound: 'src/sounds/y.mp3'
    },
    {
      name: 'Z',
      img: 'src/images/letterz.png',
      lsound: 'src/sounds/z.mp3'
    }
  ];

  function playSound () {
    let cardId = this.getAttribute('data-id');
    let audio = new Audio();
    audio.src = cardArray4[cardId].lsound;
    audio.play();
  }

console.log(cardArray4);

  // this algorithm randomizes the array
  cardArray4.sort(() => 0.5 - Math.random());

const grid4 = document.querySelector('.grid');
const level4 = document.getElementById('level');
level4.innerHTML = 4;
grid4.style.width = 650 + 'px';
// const body4 = document.getElementsByTagName('body')[0]
  // const resultDisplay = document.querySelector('#result');
  // let cardsChosen = [];
  // let cardsChosenIds = [];
  // let cardsWon = [];
  // function creates a board of 12 blank cards and adds an eventlistener
  // to each one which will be used to flip the cards

  function createBoard () {
    for (let i = 0; i < cardArray4.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'src/images/back2.png');
      card.setAttribute('data-id', i);
      card.setAttribute('class', 'card');
      card.addEventListener('click', flipCard);
      card.addEventListener('click', playSound);
      grid4.appendChild(card);
      body.style.backgroundImage = "url('src/backgrounds/lvl4.jpg')";
    }
  }
  // flip the card to reveal it
  function flipCard () {
    let cardId = this.getAttribute('data-id');
    console.log(cardArray4[cardId]);
    cardsChosen.push(cardArray4[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray4[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  // check to see if two cards are a match
  function checkForMatch () {
    console.log(cardArray4);
    console.log(cardsChosen);
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
    if (cardsWon.length === 26) {
      resultDisplay.innerHTML = 'You Win';
      // grid4.remove();
      // loadScript('src/lvl4.js');
      // body4.appendChild(div4);
      // div4.setAttribute('class', 'grid')
    }
  }

createBoard();
