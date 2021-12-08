console.log("This is snake game");

// Game Constants and Variables

let direction = { x: 0, y: 0 };
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameOver.mp3");
const moveSound = new Audio("move.mp3");
const bgSound = new Audio("bg.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
food = { x: 18, y: 13 };

// Game Functions
function main(ctime) {
  //ctime - current time
  window.requestAnimationFrame(main); // by this way we create a gameloop, and the function will be called repeatedly.
  // console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(snakeArr) {
  return false;
}

function gameEngine() {
  // Part 1: Updating the snake array & food
  if (isCollide(snakeArr)) {
    gameOverSound.play();
    bgSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game over, press any key to restart");
    snakeArr = [{ x: 13, y: 15 }];
    bgSound.play();
    score = 0;
  }

  // If food has been eaten, increase the score and regen the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
  }

  // Part 2: Display the snake and it's food
  //   Display the snake
  board.innerHTML = " ";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("s-body");
    if (index === 0) {
      snakeElement.classList.add("s-head");
    } else {
      snakeElement.classList.add("s-body");
    }
    board.appendChild(snakeElement);
  });
  //   Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main logic starts here
window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; // start the game
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
  }
});
