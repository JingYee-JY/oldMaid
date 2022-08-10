const startButton = document.getElementById("start");
const gameContainer = document.querySelector(".game-container");
const win = document.querySelector(".win-result");
const lose = document.querySelector(".lose-result");
const controls = document.querySelector(".controls-container");
const start = document.querySelector(".start-container");
const instruction = document.querySelector(".instruction-container");
const chooseInstruction = document.querySelector(".choose-container");
const videoContainer = document.querySelector(".video-container");
let cardValues;
let cards;
let intervals;
let shuffleNumber;
let pickCard = true;
let shuffle = false;
let Videoshuffle = false;


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
    if(shuffleNumber === 1){
        changePosition(1,2,0)
        matrixGenerator(cardValues);
    }
    else{
        changePosition(2,0,1)
        matrixGenerator(cardValues);
    }
}

const shuffleVideo = (value = Math.random() > 0.5 ? 1 : 2) =>{
    shuffleNumber = value;
    if(shuffleNumber === 1){
        videoContainer.innerHTML = `
        <div class="card-shuffle1">
        </div>
        <div class="card-shuffle2">
        </div>
        <div class="card-shuffle3">
        </div>`
        let card1 = document.querySelector(".card-shuffle1")
        let card2 = document.querySelector(".card-shuffle2")
        let card3 = document.querySelector(".card-shuffle3")
        card1.style.animation= "shuffle12Cu 0.7s steps(10)"
        card2.style.animation= "shuffle21Cu 0.7s steps(10)"
        let delaysecond = setTimeout(() => {
            card1.style.animation= "shuffle12Cd 0.7s steps(10)"
            card2.style.animation= "shuffle21Cd 0.7s steps(10)"
          }, 700);
        let delay = setTimeout(() => {
            card2.style.animation= "shuffle23Cu 0.7s steps(10)"
            card3.style.animation= "shuffle32Cu 0.7s steps(10)"
          }, 1400);
          let delaylast = setTimeout(() => {
            card2.style.animation= "shuffle23Cd 0.7s steps(10)"
        card3.style.animation= "shuffle32Cd 0.7s steps(10)"
          }, 2100);
          let delayFinish = setTimeout(() => {
            Choose();
          }, 3000); 
    }
    else{
        videoContainer.innerHTML = `
        <div class="card-shuffle1">
        </div>
        <div class="card-shuffle2">
        </div>
        <div class="card-shuffle3">
        </div>`
        let card1 = document.querySelector(".card-shuffle1")
        let card2 = document.querySelector(".card-shuffle2")
        let card3 = document.querySelector(".card-shuffle3")
        card1.style.animation= "shuffle12Cu 0.7s steps(8)"
        card3.style.animation= "shuffle31Cu 0.7s steps(8)"
        let delaysecond = setTimeout(() => {
            card1.style.animation= "shuffle13Cd 0.7s steps(8)"
            card3.style.animation= "shuffle31Cd 0.7s steps(8)"
          }, 700);
        let delay = setTimeout(() => {
            card2.style.animation= "shuffle23Cu 0.7s steps(8)"
            card3.style.animation= "shuffle32Cu 0.7s steps(8)"
          }, 1400);
          let delaylast = setTimeout(() => {
            card2.style.animation= "shuffle23Cd 0.7s steps(8)"
        card3.style.animation= "shuffle32Cd 0.7s steps(8)"
          }, 2100);
          let delayFinish = setTimeout(() => {
            Choose();
          }, 3000); 
    }
    console.log(shuffleNumber)
}

const matrixGenerator = (cardValues, size = 3) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues];
    for (let i = 0; i < size; i++){
        gameContainer.innerHTML +=`
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./img/Cover.png" class="image"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>  
        `;
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

                if(cardName == "boy"){
                    stopGame();
                    lose.classList.remove("hide");
                    let delay = setTimeout(() => {
                        card.classList.remove("flipped");
                        pickCard = true;
                        Retry();
                        lose.classList.add("hide");
                      }, 1500);
                }

                else{
                    stopGame();
                    win.classList.remove("hide");
                    let delay = setTimeout(() => {
                        card.classList.remove("flipped");
                        pickCard = true;
                        Retry();
                        win.classList.add("hide");
                      }, 1500);
                }
            }
        })
    })
}
startButton.addEventListener("click", () => {
    initializer();
    controls.classList.add("hide");
    startButton.classList.add("hide");
    start.classList.add("hide");
    instruction.classList.remove("hide");
    shuffle = false;
    Videoshuffle = false;
    let delay = setTimeout(() => {
        Show();
      }, 500);
})
Show = () => {
    cards.forEach((card) => {
        card.classList.add("flipped");
        let delay = setTimeout(() => {
            card.classList.remove("flipped");
          }, 1500);
          let delayMix = setTimeout(() => {
            Mix();
          }, 2500);
    })
    
  }
  Mix = () => {
    videoContainer.classList.remove("hide")
    if(Videoshuffle == false){
        shuffleVideo()
        Videoshuffle = true;
    }
        cards.forEach((card) => {
            card.classList.add("hide");
        })
        //video = document.querySelector(".back-video");
        //let delay = setTimeout(() => {
         //   Choose();
         // }, 2500);
  }

  
Choose = () => {
    if(shuffle == false){
        shuffleCard();
        shuffle = true
    }
    console.log(cardValues);
    matrixGenerator(cardValues);
    pickCard = false;
    instruction.classList.add("hide");
    videoContainer.classList.add("hide");
    chooseInstruction.classList.remove("hide");
  }

stopGame = () => {
    chooseInstruction.classList.add("hide");
  }
Retry = () => {
    instruction.classList.add("hide");
    result.classList.add("hide");
    start.classList.remove("hide");
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
  }

//Initialize values and func calls
const initializer =() => {
    result.innerText = "";
    winCount = 0;
    cardValues = generateRandom();
    matrixGenerator(cardValues);
};

initializer();

    