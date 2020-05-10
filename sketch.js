// Source: https://p5js.org/examples/interaction-snake-game.html
// Author of original code: Prashant Gupta, Github: https://github.com/prashantgupta24


//  Prashant Gupta
// the snake is divided into small segments, which are drawn and edited on each 'draw' call
let numSegments = 10;
let direction = 'right';

const xStart = 0; //starting x coordinate for snake,  Prashant Gupta
const yStart = 250; //starting y coordinate for snake,  Prashant Gupta
const diff = 10;

let xCor = [];
let yCor = [];
let extraFruits = [];

let xFruit = 0;
let yFruit = 0;
//let scoreElem;

const bgColor = 100; //grey
//const alphaVal = 40;
const snakeColor = 0; //white

/*
  State variables
    Each of them will be controlled by a key, and each toggle of the key will
    increment the state, thus cycling through all the possible states.
*/
let whatShape = 0;
const SHAPE_COUNT = 4;
/*
  0 - random "star-like" shapes, default state
  1 - triangles
  2 - rectangles/squares
  3 - circles/ellipses
*/
let shapeDirection = 0;
const MOVE_PATTERN_COUNT = 3;
/*
  Q controls this state
  0 - just spirals, default state
  1 - left to right
  2 - up / down
*/


function setup() {
/*  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');*/

  createCanvas(800, 600);
  frameRate(15);
  stroke(snakeColor);
  strokeWeight(10);
  updateFruitCoordinates();
  background(bgColor);

  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }
}

function draw() {
  //background(0);
  push()
  stroke(bgColor);
  strokeWeight(15);
  line(xCor[0], yCor[0], xCor[1], yCor[1]);
  pop();
  for (let i = 1; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
  //checkGameStatus();
  checkForFruit();
  moveSnake();
}

/*  Prashant Gupta
 The segments are updated based on the direction of the snake.
 All segments from 0 to n-1 are just copied over to 1 till n, i.e. segment 0
 gets the value of segment 1, segment 1 gets the value of segment 2, and so on,
 and this results in the movement of the snake.

 The last segment is added based on the direction in which the snake is going,
 if it's going left or right, the last segment's x coordinate is increased by a
 predefined value 'diff' than its second to last segment. And if it's going up
 or down, the segment's y coordinate is affected.
*/
function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}

/*  Prashant Gupta
 I always check the snake's head position xCor[xCor.length - 1] and
 yCor[yCor.length - 1] to see if it touches the game's boundaries
 or if the snake hits itself.
*/
function checkGameStatus() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    noLoop();
    //const scoreVal = parseInt(scoreElem.html().substring(8));
    //scoreElem.html('Game ended! Your score was : ' + scoreVal);
  }
}

/*  Prashant Gupta
 If the snake hits itself, that means the snake head's (x,y) coordinate
 has to be the same as one of its own segment's (x,y) coordinate.
*/
function checkSnakeCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}

/*  Prashant Gupta
 Whenever the snake consumes a fruit, I increment the number of segments,
 and just insert the tail segment again at the start of the array (basically
 I add the last segment again at the tail, thereby extending the tail)
*/


function checkForFruit() {
  point(xFruit, yFruit);

  //The added loop will give us the extra fruits
  for ( let i = 0; i < extraFruits.length; i++ ) {
    push()
    stroke( extraFruits[i].c );
    if ( extraFruits[i].beenEaten ) {
      fill( extraFruits[i].fillColor );
      /* Sets the shape's "center" */
      translate( extraFruits[i].x, extraFruits[i].y );

      /* Draws the shape */
      if ( extraFruits[i].movePattern == 0 ) {
        /* Rotating shapes */
        if ( extraFruits[i].shape == 0 ) {
          //spikey things
          rotatingStar(
            extraFruits[i].shiftVal,
            0,
            extraFruits[i].length1 * random(),
            extraFruits[i].length2 * random(),
            ceil( random( 3, 15 ) ),
            extraFruits[i].rotationSpeed,
            extraFruits[i].direction
          );
        } else {
          strokeWeight( ceil( random(5) ) );
          rotate( ( extraFruits[i].direction * frameCount ) / extraFruits[i].rotationSpeed );
          translate( extraFruits[i].shiftVal, extraFruits[i].shiftVal ); //maybe pass 0 as the other parameter
          if ( extraFruits[i].shape == 1 ) {
            /*
               Draw triangles, parameter passed syntax is point1, p2, then p3
               They were chosen so that the triangle shapes wouldn't always be
               isocles or right triangles.
            */
            let temp = ceil( random( 0, 8 ) );
            triangle(
              extraFruits[i].length1 / ( temp + 2 ), 0,
              0, extraFruits[i].length2 / ( temp - 2 ),
              extraFruits[i].length1, extraFruits[i].length2
             );
          } else if ( extraFruits[i].shape == 2 ) {
            //rectangles/squares
          } else if ( extraFruits[i].shape == 3 ) {
            //ellipses/circles
          } else {
            console.log( 'Unknown shape state' );
          }
        }

      } else if ( extraFruits[i].movePattern == 1 ) {
        // call left/right
        if ( extraFruits[i].shape == 0 ) {

        } else if ( extraFruits[i].shape == 1 ) {

        } else if ( extraFruits[i].shape == 2 ) {

        } else if ( extraFruits[i].shape == 3 ) {

        } else {
          console.log( 'Unknown shape state' );
        }

      } else if ( extraFruits[i].movePattern == 2 ) {
        // call up/down
        if ( extraFruits[i].shape == 0 ) {

        } else if ( extraFruits[i].shape == 1 ) {

        } else if ( extraFruits[i].shape == 2 ) {

        } else if ( extraFruits[i].shape == 3 ) {

        } else {
          console.log( 'Unknown shape state' );
        }

      }

      /* This part moves the shape */
      if ( extraFruits[i].movePattern == 0 ) {
        extraFruits[i].shiftVal++;
        if ( extraFruits[i].shiftVal > ( width / 2 ) ) {
          extraFruits[i].shiftVal = 0;
        }
      } else if ( extraFruits[i].movePattern == 1 ) {
        if ( ( extraFruits[i].x + extraFruits[i].shiftVal ) < 0 ||
          ( extraFruits[i].x + extraFruits[i].shiftVal ) > width ) {
          extraFruits[i].direction = -1 * extraFruits[i].direction;
        }
        extraFruits[i].shiftVal += extraFruits[i].direction;
      } else if ( extraFruits[i].movePattern == 2 ) {
        if ( ( extraFruits[i].y + extraFruits[i].shiftVal ) < 0 ||
          ( extraFruits[i].y + extraFruits[i].shiftVal ) > height ) {
          extraFruits[i].direction = -1 * extraFruits[i].direction;
        }
        extraFruits[i].shiftVal += extraFruits[i].direction;
      }
    } else {
      point(extraFruits[i].x, extraFruits[i].y);
    }
    pop();

    if ( xCor[xCor.length - 1] === extraFruits[i].x &&
        yCor[yCor.length - 1] === extraFruits[i].y &&
        !extraFruits[i].beenEaten ) {
      /*const prevScore = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Score = ' + (prevScore + 1)); */
      xCor.unshift(xCor[0]);
      yCor.unshift(yCor[0]);
      numSegments++;
      extraFruits[i].beenEaten = true;
      push();
      strokeWeight(15);
      stroke(bgColor);
      point(extraFruits[i].x, extraFruits[i].y);
      pop();
    }
  }
  if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
    /*const prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));*/
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateFruitCoordinates();
  }
}

function moveSnake() {
  if ( xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 /*||
    xCor[0] == xCor[xCor.length - 1] ||
    yCor[0] == yCor[yCor.length - 1] */ ) {

    let newDirection = random( [1, 2] );
    if ( direction == "right" || direction == "left" ) {

      if ( newDirection == 1 ) {
        direction = "up";
      } else {
        direction = "down";
      }
    } else {
      if ( newDirection == 1 ) {
        direction = "right";
      } else {
        direction = "left";
      }
    }
  }
}

function updateFruitCoordinates() {
  /*  Prashant Gupta
    The complex math logic is because I wanted the point to lie
    in between 100 and width-100, and be rounded off to the nearest
    number divisible by 10, since I move the snake in multiples of 10.
  */

  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
}

/* This is function is basically my controller */
function keyPressed() {
  switch (keyCode) {
    case 74: // l
    case 37: //left key
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 76: //j
    case 39: //right key
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 73: // i
    case 38: // up key
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 75: // k
    case 40: // down key
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
    case 87: // W - controls whatShape
      whatShape++;
      if ( !( whatShape < SHAPE_COUNT ) ) {
        whatShape = 0;
      }
      break;
    case 81: // Q - controls shapeDirection
      shapeDirection++;
      if ( !( shapeDirection < MOVE_PATTERN_COUNT ) ) {
        shapeDirection = 0;
      }
      break;
    case 80: // p - for pause
      noLoop();
      break;
    case 79: // o - because it's next to 'p'
      loop();
      break;
    case 83:
      saveCanvas('snakeDrawingMachine', 'jpg' );
      break;
  }
}

function mouseClicked() {

  let roundedX = floor( mouseX );
  let roundedY = floor( mouseY );
  roundedX = 100 + roundedX - ( roundedX % 10 );
  roundedY = 100 + roundedY - ( roundedY % 10 );
  let _c = color( floor ( random( 256 ) ), floor ( random( 256 ) ), floor( random( 256 ) ) );
  let _fillColor = color( floor ( random( 256 ) ), floor ( random( 256 ) ), floor( random( 256 ) ), ceil( random( 100 ) ) );
  let _direction = random( [1, -1] );
  /* For rotation, this determines the direction of rotation
     For the straight directions, it'll just determine the starting direction
  */
  //let shape = floor( random(4) );
  /*
    0 -> Star
    1 -> Triangle
    2 -> Rect
    3 -> circle/ellipse
  */

  let coordinate = {
    x: roundedX,
    y: roundedY,
    length1 : floor( random( 10, 101 ) ),
    length2: floor( random( 10, 101 ) ),
    beenEaten: false,
    c : _c,
    fillColor : _fillColor,
    shiftVal : 0,
    shape : whatShape,
    rotationSpeed : ceil( random(150) ),
    direction : _direction,
    movePattern : shapeDirection
  }; /* Default */


  extraFruits.push( coordinate );
  return false;
}


/* Source: https://p5js.org/examples/form-star.html */
function rotatingStar(x, y, radius1, radius2, npoints, rotationSpeed, direction) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  //push();
  strokeWeight( ceil( random(5) ) );
  rotate( ( direction * frameCount ) / rotationSpeed );
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  //pop();
}

function RotatingEllipse( x, y, w, h, rotationSpeed, direction ) {
  strokeWeight( ceil( random(5) ) );
  rotate( ( direction * frameCount ) / rotationSpeed );
}

/* Some random code I was playing around with that uses the star function
   It basically shifts and rotates the provided stars around. */

/*
function setup() {
  createCanvas(720, 400);
  background(102);
}

let counter = 0;

function draw() {
  //background(102);

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(counter, 0, 5, 70, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(counter, 0, 80, 100, 40);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(counter, 0, 30, 70, 5);
  pop();

  counter++;
}
*/
