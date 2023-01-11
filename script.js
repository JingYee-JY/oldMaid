const startButton = document.querySelector(".start");
const startGame = document.querySelector(".startGame");

const start = document.querySelector(".startPage");
const game = document.querySelector(".gamePage");
const instructionPage = document.querySelector(".instructionPage");
const final = document.querySelector(".finalPage");

const gameContainer = document.querySelector(".game-container");
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const againButton = document.querySelector(".again");
const home = document.querySelector(".home");
const result = document.querySelector(".result");

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")

let cardValues;
let cards;
let intervals;
let current;
let stop
let swap
let shuffleNumber;
let pickCard = true;

let border
let card1P
let card2P
let card3P
let cardY
let cardUp 
let cardDown

//CHANGE HERE TO INCREASE NUMBER OF SHUFFLE
let totalNumberOfShuffle = 4;

//Items array
const items =[
    {name:"boy", image:"./img/ChineseBoy.png"},
    {name:"maid", image: "./img/OldMaid.png"},
    {name:"boy", image: "./img/ChineseBoy.png"}
];

//Randmise the cards
const generateRandom = (size = 3) => {
  //temporary array
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //Random object selection
  for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      cardValues.push(tempArray[randomIndex]);
      //pnce selected remove object from temp array
      tempArray.splice(randomIndex, 1);
  }
  return cardValues;
}

//calling shuffle function until the cards have been shuffled
function repeat() {
  if (moving == true) {
      movingCard()
      stop = window.requestAnimationFrame(repeat);
  }
  else {
      console.log(cardY)
      pickCard = false
      cancelAnimationFrame(stop)
      
      return
  }
}

//moving/shuffing of cards
function movingCard() {

  //CHANGE HERE FOR THE CARD OFFSET POSTION FOR UP AND DOWN
  //FOR PHONE AND COMPUTER
  if (border.width < 500) {
      offsetUpDown = 175
  }
  //FOR IPAD
  if (border.width > 500) {
    offsetUpDown = 380
  }
  cardUp = cardY - offsetUpDown
  cardDown = cardY + offsetUpDown

  function movecardsVertically(shuffleStage, firstCard, secondCard, firstCardFinalPosition, secondCardFinalPosition, end){
    if (current == shuffleStage) {
      //check if the first card has reach the new position
      if (firstCard.y >= firstCardFinalPosition) {
        
        //update both card position to new
        firstCard.y = firstCardFinalPosition
        firstCard.style.top = firstCard.y + 'px';

        secondCard.y = secondCardFinalPosition
        secondCard.style.top = secondCard.y + 'px';

        //delay a while before going to next shuffle
        setTimeout(() => {
          if (current == shuffleStage) {
              current += 1
          }
          if(end){
            moving = false;
          }
        }, 100);
          return
      }

      //slowly moving cards
      firstCard.y = firstCard.y + swap
      firstCard.style.top = firstCard.y + 'px';

      secondCard.y = secondCard.y - swap
      secondCard.style.top = secondCard.y + 'px';
    }
  }

  function movecardsHorizontally(shuffleStage, firstCard, secondCard, firstCardFinalPosition, secondCardFinalPosition){
    if (current == shuffleStage) {
      //check if the first card has reach the new position
      if (firstCard.x >= firstCardFinalPosition) {
          
        //update both card position to new
        firstCard.x = firstCardFinalPosition
        firstCard.style.left = firstCard.x + 'px';

        secondCard.x = secondCardFinalPosition
        secondCard.style.left = secondCard.x + 'px';

        //delay a while before going to next shuffle
        setTimeout(() => {
          if (current == shuffleStage) {
              current += 1
          }
        }, 100);
          return
      }

      //slowly moving cards
      firstCard.x = firstCard.x + swap
      firstCard.style.left = firstCard.x + 'px';

      secondCard.x = secondCard.x - swap
      secondCard.style.left = secondCard.x + 'px';
    }
  }

  if (shuffleNumber == 1) {
    //movecardsVertically(order the shuffle is going, card going down, card going up, card up position, card down position)
    //movecardsHorizontally(order the shuffle is going, card right ->, card going left <-, card right position, card left position)
    movecardsVertically(1, card1, card2, cardDown, cardUp, false)
    movecardsHorizontally(2, card1, card2, card2P, card1P)
    movecardsVertically(3, card2, card1, cardY, cardY, false)

    movecardsVertically(4, card1, card3, cardDown, cardUp, false)
    movecardsHorizontally(5, card1, card3, card3P, card2P)
    movecardsVertically(6, card3, card1, cardY, cardY, true)
  }

  else if (shuffleNumber == 2) {
    movecardsVertically(1, card1, card3, cardDown, cardUp, false)
    movecardsHorizontally(2, card1, card3, card3P, card1P)
    movecardsVertically(3, card3, card1, cardY, cardY, false)

    movecardsVertically(4, card1, card2, cardDown, cardUp, false)
    movecardsHorizontally(5, card2, card1, card3P, card2P)
    movecardsVertically(6, card2, card1, cardY, cardY, true)
  }

  else if (shuffleNumber == 3) {
    movecardsVertically(1, card1, card2, cardDown, cardUp, false)
    movecardsHorizontally(2, card1, card2, card2P, card1P)
    movecardsVertically(3, card2, card1, cardY, cardY, false)

    movecardsVertically(4, card2, card1, cardDown, cardUp, false)
    movecardsHorizontally(5, card2, card1, card2P, card1P)
    movecardsVertically(6, card1, card2, cardY, cardY, true)
  }

  else if (shuffleNumber == 4) {
    movecardsVertically(1, card3, card2, cardDown, cardUp, false)
    movecardsHorizontally(2, card2, card3, card3P, card2P)
    movecardsVertically(3, card2, card3, cardY, cardY, false)

    movecardsVertically(4, card1, card3, cardDown, cardUp, false)
    movecardsHorizontally(5, card1, card3, card2P, card1P)
    movecardsVertically(6, card3, card1, cardY, cardY, true)
  }
}

//generates the cards
const matrixGenerator = (cardValues, size = 3) => {
  cardValues = [...cardValues];

  // change cover image of the card here!!

  for (let i = 0; i < size; i++) {
      if (i == 0) {
          card1.innerHTML += `
      <div class="card-container" data-card-value="${cardValues[i].name}">
      <div class="card-before">
      <img src="./img/cover.png" class="image"/></div>
      <div class="card-after">
      <img src="${cardValues[i].image}" class="image"/></div>
   </div>`;
      }
      if (i == 1) {
          card2.innerHTML += `
      <div class="card-container" data-card-value="${cardValues[i].name}">
      <div class="card-before">
      <img src="./img/cover.png" class="image"/></div>
      <div class="card-after">
      <img src="${cardValues[i].image}" class="image"/></div>
   </div>`;
      }
      if (i == 2) {
          card3.innerHTML += `
      <div class="card-container" data-card-value="${cardValues[i].name}">
      <div class="card-before">
      <img src="./img/cover.png" class="image"/></div>
      <div class="card-after">
      <img src="${cardValues[i].image}" class="image"/></div>
   </div>`;
      }

      let offestShow
      let offestP1
      let offestP2
      let offestP3
      let offestY

      border = gameContainer.getBoundingClientRect();

      //CHANNGE HERE FOR CARD POSITION OFFSET FORM SCREEN SIZE AND SHUFFLING SPEED
      //FOR PHONE AND COMPUTER
      if (border.width < 500) {
          offestShow = 250
          offestP1 = 91
          offestP2 = 55
          offestP3 = 19
          offestY = -55
          swap = 1.3
      }
      //FOR IPAD
      if (border.width > 500) {
          offestShow = 450
          offestP1 = 200
          offestP2 = 120
          offestP3 = 50
          offestY = -10
          swap = 2
      }

      //Getting cards position
      border = gameContainer.getBoundingClientRect();
      card1P = (border.width / 4) - offestP1
      card2P = (border.width / 2) - offestP2
      card3P = ((border.width / 2) + (border.width / 4)) - offestP3
      cardY = (border.height / 2) - offestY
      
      //Positioning the cards
      card1.x = card1P
      card1.y = cardY
      card1.style.top = card1.y + 'px';
      card1.style.left = card1.x + 'px';

      card2.x = card2P
      card2.y = cardY
      card2.style.top = card2.y + 'px';
      card2.style.left = card2.x + 'px';


      card3.x = card3P
      card3.y = cardY
      card3.style.top = card3.y + 'px';
      card3.style.left = card3.x + 'px';
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},9.25em)`;
    
    //Cards
    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if(pickCard == false){
              playClickSound()
                let cardName = card.getAttribute("data-card-value");
                card.classList.add("flipped");
                pickCard = true;

                if(cardName == "boy"){
                  lose.currentTime = 0
                  lose.play()    

                  let delay = setTimeout(() => {
                    result.src = "./img/lose.png"
                    final.classList.remove("hide")
                  }, 1500);
                }

                else{
                  completed.currentTime = 0
                  completed.play()

                  let delay = setTimeout(() => {
                    result.src = "./img/win.png"
                    final.classList.remove("hide")
                  }, 1500);
                }
            }
        })
    })
}

//Flip cards at start to show
Show = () => {
  cards.forEach((card) => {
      card.classList.add("flipped");
      let delay = setTimeout(() => {
          card.classList.remove("flipped");
          return
        }, 1500);
        let delayMix = setTimeout(() => {
          moving = true
          shuffleNumber = Math.floor(Math.random() * parseInt(totalNumberOfShuffle)) + 1
          repeat()
        }, 2500);
  })
  
}

//Initialize values and function calls
const initializer =() => {
  winCount = 0;
  cardValues = generateRandom();
  matrixGenerator(cardValues);
};

startButton.addEventListener("click", () => {
  playClickSound()
    let delay = setTimeout(() => {
      start.classList.add("hide");
      instructionPage.classList.remove("hide");
    }, 200);
})

startGame.addEventListener("click", () => {
  playClickSound()
    let delay = setTimeout(() => {
      instructionPage.classList.add("hide");
      game.classList.remove("hide");
      began()
    }, 200);
})

againButton.addEventListener("click", () => {
  playClickSound()
    let delay = setTimeout(() => {
      final.classList.add("hide")
      game.classList.add("hide")
      start.classList.remove("hide")
      let all = document.querySelectorAll(".card-container")
      all.forEach((items) => {
        items.remove()
      })  
    }, 200);
})

home.addEventListener("click", () => {
  playClickSound()
  let delay = setTimeout(() => {
    location.assign('https://gimme.sg/activations/dementia/');
  }, 200);
})

function began(){
  initializer();  
  current = 1;
  shuffleNumber = 0
  let delay = setTimeout(() => {
      Show();
  }, 500);
}

function playClickSound(){
  console.log(clickSound)
  clickSound.currentTime = 0
  clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });
    