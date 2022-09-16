const startButton = document.querySelector(".startButton");
const gameContainer = document.querySelector(".game-container");
const againButton = document.querySelector(".againButton");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
const instruction = document.querySelector(".instruction-container");
const videoContainer = document.querySelector(".video-container");
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
let cardValues;
let cards;
let intervals;
let current;
let stop
let swap = {step: 1}
let up = {step: 1}
let shuffleNumber;
let pickCard = true;

let border
let shuffle1
let shuffle2
let shuffle3
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

function changePosition(start,middle, end){
    //Change array
    const mix =[
        cardValues[start],cardValues[middle],cardValues[end]
    ];
    cardValues = mix;
}
const shuffleCard = () =>{
    if(shuffleNumber == 1){
        changePosition(1,2,0)
        matrixGenerator(cardValues);
    }
    if(shuffleNumber == 2){
        changePosition(2,0,1)
        matrixGenerator(cardValues);
    }
    shuffleNumber = 0
}

const shuffleVideo = () =>{
  if(shuffleNumber == 0){
    shuffleNumber = Math.floor(Math.random() * 2) + 1
  }
  console.log(shuffleNumber)
  moving = true
  border = videoContainer.getBoundingClientRect();

  repeat()
}

function repeat(){
  console.log(stop)
  if(moving == true){
    movingCard()
    stop = window.requestAnimationFrame(repeat);
  }
  else{
    cancelAnimationFrame(stop)
    return
  }
}

function movingCard(){
    cardUp = (border.height / 2) - 230
    cardDown = (border.height / 2) - 70

    if(shuffleNumber == 1){
      if(current == 1){
        console.log("11")
        if(shuffle1.y < cardDown){
          let delay = setTimeout(() => {
            if(current == 1){
              current = 2
            }
          }, 500);
          shuffle1.y = cardDown
          shuffle2.y = cardUp
        }
  
        shuffle1.y = shuffle1.y + swap.step
        shuffle1.style.top = shuffle1.y + 'px';
  
        shuffle2.y = shuffle2.y - swap.step
        shuffle2.style.top = shuffle2.y + 'px';
      }
  
      if(current == 2){
        if(shuffle1.x > card2P){
          console.log("12")
          let delay = setTimeout(() => {
            if(current == 2){
              current = 3
            }
          }, 100);
          shuffle1.x = card2P
          shuffle2.x = card1P
        }
  
        shuffle1.x = shuffle1.x + swap.step
        shuffle1.style.left = shuffle1.x + 'px';
  
        shuffle2.x = shuffle2.x - swap.step
        shuffle2.style.left = shuffle2.x + 'px';
      }
  
      if(current == 3){
        console.log("13")
        if(shuffle1.y < cardY){
          let delay = setTimeout(() => {
            if(current == 3){
              current = 4
            }
          }, 500);
          shuffle1.y = cardY
          shuffle2.y = cardY
        }
        shuffle1.y = shuffle1.y - swap.step
        shuffle1.style.top = shuffle1.y + 'px';
  
        shuffle2.y = shuffle2.y + swap.step
        shuffle2.style.top = shuffle2.y + 'px';
      }
  
      if(current == 4){
        console.log("14")
        if(shuffle1.y < cardDown){
          let delay = setTimeout(() => {
            if(current == 4){
              current = 5
            }
          }, 500);
          shuffle1.y = cardDown
          shuffle3.y = cardUp
        }
        shuffle1.y = shuffle1.y + swap.step
        shuffle1.style.top = shuffle1.y + 'px';
  
        shuffle3.y = shuffle3.y - swap.step
        shuffle3.style.top = shuffle3.y + 'px';
      }
  
      if(current == 5){
        console.log("15")
        if(shuffle1.x > card3P){
          let delay = setTimeout(() => {
            if(current == 5){
              current = 6
            }
          }, 100);
          shuffle1.x = card3P
          shuffle3.x = card2P
        }
        shuffle1.x = shuffle1.x + swap.step
        shuffle1.style.left = shuffle1.x + 'px';
  
        shuffle3.x = shuffle3.x - swap.step
        shuffle3.style.left = shuffle3.x + 'px';
      }
  
      if(current == 6){
        console.log("16")
        if(shuffle1.y < cardY){
          let delay = setTimeout(() => {
            if(current == 6){
              current = 10
              moving = false
              Choose()
            }
          }, 500);
          shuffle1.y = cardY
          shuffle3.y = cardY
        }
        shuffle1.y = shuffle1.y - swap.step
        shuffle1.style.top = shuffle1.y + 'px';
  
        shuffle3.y = shuffle3.y + swap.step
        shuffle3.style.top = shuffle3.y + 'px';
      }
    }
  if(shuffleNumber == 2){
    if(current == 1){
      console.log("21")
      if(shuffle1.y < cardDown){
        let delay = setTimeout(() => {
          if(current == 1){
            current = 2
          }
        }, 500);
        shuffle1.y = cardDown
        shuffle3.y = cardUp
      }

      shuffle1.y = shuffle1.y + swap.step
      shuffle1.style.top = shuffle1.y + 'px';

      shuffle3.y = shuffle3.y - swap.step
      shuffle3.style.top = shuffle3.y + 'px';
    }

    if(current == 2){
      if(shuffle1.x > card3P){
        console.log("22")
        let delay = setTimeout(() => {
          if(current == 2){
            current = 3
          }
        }, 100);
        shuffle1.x = card3P
        shuffle3.x = card1P
      }

      shuffle1.x = shuffle1.x + swap.step
      shuffle1.style.left = shuffle1.x + 'px';

      shuffle3.x = shuffle3.x - swap.step
      shuffle3.style.left = shuffle3.x + 'px';
    }

    if(current == 3){
      if(shuffle1.y < cardY){
        console.log("23")
        let delay = setTimeout(() => {
          if(current == 3){
            current = 4
          }
        }, 800);
        shuffle1.y = cardY
        shuffle3.y = cardY
      }
      shuffle1.y = shuffle1.y - swap.step
      shuffle1.style.top = shuffle1.y + 'px';

      shuffle3.y = shuffle3.y + swap.step
      shuffle3.style.top = shuffle3.y + 'px';
    }

    if(current == 4){
      if(shuffle1.y < cardDown){
        console.log("24")
        let delay = setTimeout(() => {
          if(current == 4){
            current = 5
          }
        }, 500);
        shuffle1.y = cardDown
        shuffle2.y = cardUp
      }

      shuffle1.y = shuffle1.y + swap.step
      shuffle1.style.top = shuffle1.y + 'px';

      shuffle2.y = shuffle2.y - swap.step
      shuffle2.style.top = shuffle2.y + 'px';
    }

    if(current == 5){
      if(shuffle1.x < card2P){
        console.log("25")
        let delay = setTimeout(() => {
          if(current == 5){
            current = 6
          }
        }, 100);
        shuffle1.x = card2P
        shuffle2.x = card3P
      }

      shuffle1.x = shuffle1.x - swap.step
      shuffle1.style.left = shuffle1.x + 'px';

      shuffle2.x = shuffle2.x + swap.step
      shuffle2.style.left = shuffle2.x + 'px';
    }

    if(current == 6){
      console.log("26")
      if(shuffle1.y < cardY){
        let delay = setTimeout(() => {
          if(current == 6){
              current = 10
              moving = false
              Choose()
          }
        }, 800);
        shuffle1.y = cardY
        shuffle2.y = cardY
      }
      shuffle1.y = shuffle1.y - swap.step
      shuffle1.style.top = shuffle1.y + 'px';
  
      shuffle2.y = shuffle2.y + swap.step
      shuffle2.style.top = shuffle2.y + 'px';
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

    border = gameContainer.getBoundingClientRect();
    card1P = (border.width / 4) - 90
    card2P = (border.width / 2) - 54
    card3P = ((border.width / 2) + (border.width / 4)) - 18 
    cardY = (border.height / 2) - 150
    
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
                let cardName = card.getAttribute("data-card-value");
                card.classList.add("flipped");
                pickCard = true;

                if(cardName == "boy"){
                  instruction.innerHTML = "<p>Don’t give up!</p>"
                    let delay = setTimeout(() => {
                        againButton.classList.remove("hide")
                      }, 1500);
                }

                else{
                  instruction.innerHTML = "<p>Congratulation!</p>"
                    let delay = setTimeout(() => {
                      againButton.classList.remove("hide")
                      }, 1500);
                }
            }
        })
    })
}
startButton.addEventListener("click", () => {
  console.log("S")
    start.classList.add("hide");
    game.classList.remove("hide");
    began()
})

againButton.addEventListener("click", () => {
  againButton.classList.add("hide")
  pickCard = true;
  let flipped = document.querySelector(".flipped");
  flipped.classList.remove("flipped")
  instruction.innerHTML =""
  let delay = setTimeout(() => {
    Retry();
    began()
    }, 1000);
})

function began(){
  instruction.classList.remove("hide");
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
            Mix();
          }, 2500);
    })
    
  }
  Mix = () => {
    let all = document.querySelectorAll(".card-container")
    all.forEach((items) => {
      items.remove()
    })
    videoContainer.classList.remove("hide")
    instruction.innerHTML = ""
    Position();
    shuffleVideo()
    cards.forEach((card) => {
      card.remove();
    })
  }

  
Choose = () => {
    shuffleCard();
    pickCard = false;
    videoContainer.classList.add("hide");
    instruction.innerHTML = "<p>Select the Old Maid card.</p>"
  }

Retry = () => {
  let all = document.querySelectorAll(".card-container")
  all.forEach((items) => {
    items.remove()
  })  
    videoContainer.classList.add("hide")
    Position()
  }

//Initialize values and func calls
const initializer =() => {
  instruction.innerHTML="<p>Remeber the Old Maid card</p>"
    winCount = 0;
    cardValues = generateRandom();
    matrixGenerator(cardValues);
};

function Position(){
  shuffle1 = document.querySelector(".card-shuffle1")
  shuffle2 = document.querySelector(".card-shuffle2")
  shuffle3 = document.querySelector(".card-shuffle3")
  
  shuffle1.x = card1P
  shuffle1.y = cardY
  shuffle1.style.top = shuffle1.y + 'px';
  shuffle1.style.left = shuffle1.x + 'px';
  
  shuffle2.x = card2P
  shuffle2.y = cardY
  shuffle2.style.top = shuffle2.y + 'px';
  shuffle2.style.left = shuffle2.x + 'px';
 

  shuffle3.x = card3P
  shuffle3.y = cardY
  shuffle3.style.top = shuffle3.y + 'px';
  shuffle3.style.left = shuffle3.x + 'px';
}

    