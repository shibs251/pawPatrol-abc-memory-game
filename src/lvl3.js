function test () {
  console.log('bitches');
}
// card options
  const cardArray3 = [
    {
      name: 'M',
      img: 'src/images/letterm.jpg',
      lsound: 'src/sounds/m.mp3'
    },
    {
      name: 'N',
      img: 'src/images/lettern.jpg',
      lsound: 'src/sounds/n.mp3'
    },
    {
      name: 'O',
      img: 'src/images/lettero.jpg',
      lsound: 'src/sounds/o.mp3'
    },
    {
      name: 'P',
      img: 'src/images/letterp.jpg',
      lsound: 'src/sounds/p.mp3'
    },
    {
      name: 'Q',
      img: 'src/images/letterq.jpg',
      lsound: 'src/sounds/q.mp3'
    },
    {
      name: 'R',
      img: 'src/images/letterr.jpg',
      lsound: 'src/sounds/r.mp3'
    },
    {
      name: 'S',
      img: 'src/images/letters.png',
      lsound: 'src/sounds/s.mp3'
    },
    {
      name: 'M',
      img: 'src/images/letterm.jpg',
      lsound: 'src/sounds/m.mp3'
    },
    {
      name: 'N',
      img: 'src/images/lettern.jpg',
      lsound: 'src/sounds/n.mp3'
    },
    {
      name: 'O',
      img: 'src/images/lettero.jpg',
      lsound: 'src/sounds/o.mp3'
    },
    {
      name: 'P',
      img: 'src/images/letterp.jpg',
      lsound: 'src/sounds/p.mp3'
    },
    {
      name: 'Q',
      img: 'src/images/letterq.jpg',
      lsound: 'src/sounds/q.mp3'
    },
    {
      name: 'R',
      img: 'src/images/letterr.jpg',
      lsound: 'src/sounds/r.mp3'
    },
    {
      name: 'S',
      img: 'src/images/letters.png',
      lsound: 'src/sounds/s.mp3'
    },
  ];

  function playSound () {
    let cardId = this.getAttribute('data-id');
    let audio = new Audio();
    audio.src = cardArray3[cardId].lsound;
    audio.play();
  }

  // when level is complete this function will load next level
function loadScript (url) {
  const script4 = document.createElement('script');
  script4.setAttribute('id', 'lvl4');
  const lvl3Script = document.getElementById('lvl3');
  // script.type = 'text/javascript';
  script4.src = url;
  body3.appendChild(script4);
  lvl3Script.remove();
}
  console.log(cardArray3);

  // this algorithm randomizes the array
  cardArray3.sort(() => 0.5 - Math.random());

const grid3 = document.querySelector('.grid');
const level3 = document.getElementById('level');
level3.innerHTML = 3;
grid3.style.width = 650 + 'px';
  const body3 = document.getElementsByTagName('body')[0]
  // const resultDisplay = document.querySelector('#result');
  // let cardsChosen = [];
  // let cardsChosenIds = [];
  // let cardsWon = [];
  // function creates a board of 12 blank cards and adds an eventlistener
  // to each one which will be used to flip the cards

  function createBoard () {
    for (let i = 0; i < cardArray3.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'src/images/back2.png');
      card.setAttribute('data-id', i);
      card.setAttribute('class', 'card');
      card.addEventListener('click', flipCard);
      card.addEventListener('click', playSound);
      grid3.appendChild(card);
      body.style.backgroundImage = "url('src/backgrounds/lvl3.jpg')";
    }
  }
  // flip the card to reveal it
  function flipCard () {
    let cardId = this.getAttribute('data-id');
    console.log(cardArray3[cardId]);
    cardsChosen.push(cardArray3[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray3[cardId].img);
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
    if (cardsWon.length === 19) {
      // resultDisplay.innerHTML = 'You won bitches';
      grid3.remove();
      loadScript('src/lvl4.js');
      const div3 = document.createElement('div');
      body3.appendChild(div3);
      div3.setAttribute('class', 'grid');
    }
  }

createBoard();
