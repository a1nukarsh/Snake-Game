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

// Game Functions
function main(ctime) {
  //ctime - current time
  window.requestAnimationFrame(main); // by this way we create a gameloop, and the function will be called repeatedly.
  console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function gameEngine() {
  // Part 1: Updating the snake array & food

  // Part 2: Display the snake and it's food
  board.innerHTML = " ";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add('food')
    board.appendChild(snakeElement)
  });
}

// Main logic starts here
window.requestAnimationFrame(main);
