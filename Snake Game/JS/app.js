const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;
let score = 0;

// load images
const ground = new Image();
ground.src = "Images/ground.png";

const foodImg = new Image();
foodImg.src = "Images/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the snake, food and direction

let snake = [];
snake[0] = {x:10*box, y:10*box};

let direction;

let food_position = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// change direction of the snake
function keydowner (event) {
  if ((event.code == "ArrowLeft") && (direction != "right")) {
    direction = "left"
    left.play();
  }
  else if ((event.code == "ArrowUp") && (direction != "down")) {
    direction = "up"
    up.play();
  }
  else if ((event.code == "ArrowRight") && (direction != "left")) {
    direction = "right"
    right.play();
  }
  else if ((event.code == "ArrowDown") && (direction != "up")) {
    direction = "down"
    down.play();
  }
}

// cheack collision function
function collision(head){
    for(let i = 0; i < snake.length; i++){
        if(head.x == snake[i].x && head.y == snake[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){

    ctx.drawImage(ground,0,0);
    ctx.drawImage(foodImg, food_position.x, food_position.y);
    ctx.fillStyle = "white";
    ctx.font = "40px Calibri";
    ctx.fillText(score,2*box,1.6*box);

    for (var a = 0; a<snake.length; a++) {
      ctx.fillStyle = (a == 0) ? "green": "white";
      ctx.fillRect(snake[a].x, snake[a].y, box, box);
      ctx.strokeStyle = "red"
      ctx.strokeRect(snake[a].x, snake[a].y, box, box);
    }



    // old head position
    pos = {x:snake[0].x, y:snake[0].y}

    // which direction
    if( direction == "left") pos.x -= box;
    if( direction == "up") pos.y -= box;
    if( direction == "right") pos.x += box;
    if( direction == "down") pos.y += box;

// whether snake its food
    if ((pos.x == food_position.x) && (pos.y == food_position.y)) {
      score += 1
      food_position = {x: Math.floor(Math.random()*17 + 1)*box ,
                           y: Math.floor(Math.random()*15 + 3)*box};
      eat.play();
    }
    else {
      snake.pop();
    }


    // game over

    if(pos.x < box || pos.x > 17 * box || pos.y < 3*box || pos.y > 17*box || collision(pos)){
        clearInterval(game);
        dead.play();
        ctx.fillStyle = "white";
        ctx.font = "60px Calibri";
        ctx.fillText("GAME OVER", 5*box, 11*box);
    }
    else {
    snake.unshift(pos);
  }
}

// call draw function every 100 ms

let game = setInterval(draw,200);
document.addEventListener("keydown", keydowner);
