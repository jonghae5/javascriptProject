let timer; 
let timeLeft = 10; // seconds
let id = 0;

const playBtn = document.querySelector(".play__button");
const time = document.querySelector(".timer");
const icon = document.querySelector("#icon");
const mainItem = document.querySelector('.main');
const number = document.querySelector(".number");
const mission = document.querySelector(".mission");
const gameText = document.querySelector(".text");

function gameOver() {

  clearInterval(timer);
  gameText.innerHTML="게임오버";
  mission.style.display="block";
}

function gameClear() {

    clearInterval(timer);
    gameText.innerHTML="You Win";
    mission.style.display="block";
  }

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    time.innerHTML = timeLeft;
  else {
    gameOver();
  }
}

// The button has an on-click event handler that calls this
function start() {
  if (icon.className === "fas fa-stop") {
    createItem();
    timeLeft = 10;
      
  } else {
    icon.className = "fas fa-stop";
    createItem();

    timer = setInterval(updateTimer, 1000);
    updateTimer();
  };

}

function restart() {
    mission.style.display="none";
    icon.className = "fas fa-stop";
    start();

    timer = setInterval(updateTimer, 1000);
    updateTimer();
  }


function createCarrot(){
    carrotImg = document.createElement('img');
    carrotImg.setAttribute('src','img/carrot.png');
    carrotImg.setAttribute('class','carrot');
    carrotImg.setAttribute('alt','carrot');
    carrotImg.setAttribute('data-id',id);
    carrotImg.style.top = (Math.random() * 200) + 'px'
    carrotImg.style.left = (Math.random() * 800) + 'px'

    mainItem.appendChild(carrotImg);
    id++;
}

function createBug(){
    const bugImg = document.createElement('img');
    bugImg.setAttribute('src','img/bug.png');
    bugImg.setAttribute('class','bug');
    bugImg.setAttribute('alt','bug');
    bugImg.setAttribute('data-id',id);
    bugImg.classList.add('bug');
    bugImg.style.top = (Math.random() * 200) + 'px'
    bugImg.style.left = (Math.random() * 800) + 'px'
    
    mainItem.appendChild(bugImg);
    id++;
}

function createItem() {
    mainItem.innerHTML="";
    for(let i =0; i<5; i++) {
        createCarrot();
        createBug();
    }
    number.innerHTML = document.querySelectorAll(".carrot").length;
}




mainItem.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    const className = event.target.className;
    const carrotArr = document.querySelectorAll(".carrot");

    if (id) {
        if (className==="carrot") {
            const toBeDeleted = document.querySelector(`.carrot[data-id="${id}"]`);
            toBeDeleted.remove();
            number.innerHTML = carrotArr.length -1;
            
            if (carrotArr.length=== 1){
                gameClear();
                
            }
        } else if (className==="bug") {
            gameOver();
        }
    }
})
