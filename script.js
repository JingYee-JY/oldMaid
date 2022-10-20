const startButton = document.querySelector(".startButton");
const gameContainer = document.querySelector(".game-container");
const againButton = document.querySelector(".againButton");
const home = document.querySelector(".home");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
const instruction = document.querySelector(".instruction-container");
const videoContainer = document.querySelector(".video-container");
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")

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

//Items array
const items =[
    {name:"boy", image:"./img/ChineseBoy.png"},
    {name:"maid", image: "./img/OldMaid.png"},
    {name:"boy", image: "./img/ChineseBoy.png"}
];

const generateRandom = (size = 3) => {
    //temporary array
    let tempArray = [...items];
    //initializes cardValues array
    let cardValues =[];
    //Random object selection
    for(let i = 0; i < size; i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        //pnce selected remove object from temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
}

function repeat(){
  console.log(stop)
  if(moving == true){
    movingCard()
    stop = window.requestAnimationFrame(repeat);
  }
  else{
    cancelAnimationFrame(stop)
    instruction.classList.remove("hidden")
    instruction.innerHTML = "<p class='maidText'>Select the Old Maid card.</p>"
    return
  }
}

function movingCard(){
  if(border.width < 500){
    offsetUp = 310
    offsetDown = -10
}
if(border.width > 500){
    offsetUp = 470
    offsetDown = -120
}
cardUp = (border.height / 2) - offsetUp
cardDown = (border.height / 2) - offsetDown

console.log(cardY, cardDown)
if(shuffleNumber == 1){
  if(current == 1){
    console.log("11")
    if(card1.y > cardDown){
      let delay = setTimeout(() => {
        if(current == 1){
          current = 2
        }
      }, 100);
      card1.y = cardDown
      card2.y = cardUp
      return
    }

    card1.y = card1.y + swap
    card1.style.top = card1.y + 'px';

    card2.y = card2.y - swap
    card2.style.top = card2.y + 'px';
  }

  if(current == 2){
    if(card1.x > card2P){
      console.log("12")
      let delay = setTimeout(() => {
        if(current == 2){
          current = 3
        }
      }, 100);
      card1.x = card2P
      card2.x = card1P
      return
    }

    card1.x = card1.x + swap
    card1.style.left = card1.x + 'px';

    card2.x = card2.x - swap
    card2.style.left = card2.x + 'px';
  }

  if(current == 3){
    console.log("13")
    if(card1.y < cardY){
      let delay = setTimeout(() => {
        if(current == 3){
          current = 4
        }
      }, 100);
      card1.y = cardY
      card2.y = cardY
      card1.style.top = cardY + 'px';
      card2.style.top = cardY + 'px';
      return
    }
    card1.y = card1.y - swap
    card1.style.top = card1.y + 'px';

    card2.y = card2.y + swap
    card2.style.top = card2.y + 'px';
  }

  if(current == 4){
    console.log("14")
    if(card1.y > cardDown){
      let delay = setTimeout(() => {
        if(current == 4){
          current = 5
        }
      }, 100);
      card1.y = cardDown
      card3.y = cardUp
      return
    }
    card1.y = card1.y + swap
    card1.style.top = card1.y + 'px';

    card3.y = card3.y - swap
    card3.style.top = card3.y + 'px';
  }

  if(current == 5){
    console.log("15")
    if(card1.x > card3P){
      let delay = setTimeout(() => {
        if(current == 5){
          current = 6
        }
      }, 100);
      card1.x = card3P
      card3.x = card2P
      return
    }
    card1.x = card1.x + swap
    card1.style.left = card1.x + 'px';

    card3.x = card3.x - swap
    card3.style.left = card3.x + 'px';
  }

  if(current == 6){
    console.log("16")
    if(card1.y < cardY){
      let delay = setTimeout(() => {
        if(current == 6){
          current = 10
          moving = false
          pickCard = false;
        }
      }, 100);
      card1.y = cardY
      card3.y = cardY
      card1.style.top = cardY + 'px';
      card3.style.top = cardY + 'px';
      return
    }
    card1.y = card1.y - swap
    card1.style.top = card1.y + 'px';

    card3.y = card3.y + swap
    card3.style.top = card3.y + 'px';
  }
}
if(shuffleNumber == 2){
if(current == 1){
  console.log("21")
  if(card1.y > cardDown){
    let delay = setTimeout(() => {
      if(current == 1){
        current = 2
      }
    }, 100);
    card1.y = cardDown
    card3.y = cardUp
    return
  }

  card1.y = card1.y + swap
  card1.style.top = card1.y + 'px';

  card3.y = card3.y - swap
  card3.style.top = card3.y + 'px';
}

if(current == 2){
  if(card1.x > card3P){
    console.log("22")
    let delay = setTimeout(() => {
      if(current == 2){
        current = 3
      }
    }, 100);
    card1.x = card3P
    card3.x = card1P
    return
  }

  card1.x = card1.x + swap
  card1.style.left = card1.x + 'px';

  card3.x = card3.x - swap
  card3.style.left = card3.x + 'px';
}

if(current == 3){
  if(card1.y < cardY){
    console.log("23")
    let delay = setTimeout(() => {
      if(current == 3){
        current = 4
      }
    }, 100);
    card1.y = cardY
    card3.y = cardY
    card1.style.top = cardY + 'px';
    card3.style.top = cardY + 'px';
    return
  }
  card1.y = card1.y - swap
  card1.style.top = card1.y + 'px';

  card3.y = card3.y + swap
  card3.style.top = card3.y + 'px';
}

if(current == 4){
  if(card1.y > cardDown){
    console.log("24")
    let delay = setTimeout(() => {
      if(current == 4){
        current = 5
      }
    }, 100);
    card1.y = cardDown
    card2.y = cardUp
    return
  }

  card1.y = card1.y + swap
  card1.style.top = card1.y + 'px';

  card2.y = card2.y - swap
  card2.style.top = card2.y + 'px';
}

if(current == 5){
  if(card1.x < card2P){
    console.log("25")
    let delay = setTimeout(() => {
      if(current == 5){
        current = 6
      }
    }, 100);
    card1.x = card2P
    card2.x = card3P
    return
  }

  card1.x = card1.x - swap
  card1.style.left = card1.x + 'px';

  card2.x = card2.x + swap
  card2.style.left = card2.x + 'px';
}

if(current == 6){
  console.log("26")
  if(card1.y < cardY){
    let delay = setTimeout(() => {
      if(current == 6){
          current = 10
          moving = false
          pickCard = false;
      }
    }, 100);
    card1.y = cardY
    card2.y = cardY
    card1.style.top = cardY + 'px';
    card2.style.top = cardY + 'px';
    return
  }
  card1.y = card1.y - swap
  card1.style.top = card1.y + 'px';

  card2.y = card2.y + swap
  card2.style.top = card2.y + 'px';
}
}
}

const matrixGenerator = (cardValues, size = 3) => {
    cardValues = [...cardValues];
    for (let i = 0; i < size; i++){
      if(i == 0){
        card1.innerHTML +=`
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./img/Cover.png" class="image"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>`;
      }  
      if(i == 1){
        card2.innerHTML +=`
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./img/Cover.png" class="image"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>`;
      } 
      if(i == 2){
        card3.innerHTML +=`
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./img/Cover.png" class="image"/></div>
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

    if(border.width < 500){
        offestShow = 250
        offestP1 = 90
        offestP2 = 54
        offestP3 = 18
        offestY = 150
        swap = 1.3
    }
    if(border.width > 500){
        offestShow = 450
        offestP1 = 90
        offestP2 = 54
        offestP3 = 18
        offestY = 170
        swap = 2
    }

    border = gameContainer.getBoundingClientRect();
    card1P = (border.width / 4) - offestP1
    card2P = (border.width / 2) - offestP2
    card3P = ((border.width / 2) + (border.width / 4)) - offestP3 
    cardY = (border.height / 2) - offestY
    
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
                  instruction.innerHTML = "<p class='maidText'>Try again!</p>"
                  lose.currentTime = 0
                  lose.play()    

                  let delay = setTimeout(() => {
                    againButton.classList.remove("hidden")
                    home.classList.remove("hidden")
                  }, 1500);
                }

                else{
                  instruction.innerHTML = "<p class='maidText'>Good!</p>"
                  completed.currentTime = 0
                  completed.play()

                  let delay = setTimeout(() => {
                    againButton.classList.remove("hidden")
                    home.classList.remove("hidden")
                  }, 1500);
                }
            }
        })
    })
}
startButton.addEventListener("click", () => {
  playClickSound()
    let delay = setTimeout(() => {
      start.classList.add("hide");
      game.classList.remove("hide");
      began()
    }, 200);
})

againButton.addEventListener("click", () => {
  playClickSound()
    let delay = setTimeout(() => {
      againButton.classList.add("hidden")
      home.classList.add("hidden")
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
  instruction.classList.remove("hidden");
  instruction.style.color = "white"
  initializer();  
  current = 1;
    shuffleNumber = 0
    let delay = setTimeout(() => {
        Show();
      }, 500);
}

Show = () => {
    cards.forEach((card) => {
        card.classList.add("flipped");
        let delay = setTimeout(() => {
            card.classList.remove("flipped");
            return
          }, 1500);
          let delayMix = setTimeout(() => {
            instruction.classList.add("hidden")
            moving = true
            shuffleNumber = Math.floor(Math.random() * 2) + 1
            repeat()
          }, 2500);
    })
    
  }

//Initialize values and func calls
const initializer =() => {
  instruction.innerHTML="<p class='maidText'>Remember the Old Maid card</p>"
    winCount = 0;
    cardValues = generateRandom();
    matrixGenerator(cardValues);
};

function playClickSound(){
  console.log(clickSound)
  clickSound.currentTime = 0
  clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });
    