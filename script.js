console.log("This is snake game");

// Game Constants and Variables

let direction = { x: 0, y: 0 };
const foodSound = new Audio('food.mp3')
const gameOverSound = new Audio('gameOver.mp3')
const moveSound = new Audio('move.mp3')
const bgSound = new Audio('bg.mp3')

// Game Functions
function main(ctime) { //ctime - current time
    window.requestAnimationFrame(main); // by this way we create a gameloop, and the function will be called repeatedly.
    
    console.log(ctime)

}



// Main logic starts here
window.requestAnimationFrame(main);