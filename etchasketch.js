//16 x 16 grid of square divs. create using JS

//put divs in a "container" div

//set up hover effect so grid divs change colors when mouse passses over

/*
add a button to top of screen that will send user a popup asking # of squares per side of grid.
once entered existing grid should be removed and new grid generated. Allow for entering 64 and
a 64x64 grid pops up without changing total # of pixels used.
*/

//*Optional* allow the color change mouse overs to be randomly generated RGB values

/*
page load
generate 16x16 grid based on grid variable

*/

//app variables
const defaultGridSize = 16;
let gridSize = defaultGridSize;
let squares = [];
let currentColor = "black";

//app setting
let sketchArea = document.querySelector("#sketchArea");
let userInput = document.querySelector("#userInput");
function setup() {
  sketchArea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  sketchArea.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  sketchArea.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    //i represents each row
    let square = document.createElement("div"); //set class for these divs?
    square.addEventListener("mouseenter", () => {
      if (currentColor === "random") {
        let randColor = "#" + Math.floor(Math.random() * 0xffffff);
        square.style.backgroundColor = randColor;
      } else square.style.backgroundColor = currentColor;
    });
    square.style.backgroundColor = "white";
    sketchArea.insertAdjacentElement("beforeend", square);
    square.classList.add("boxes");
    squares.push(square);
  }
}

// sketchArea.style.gridTemplateColumns = "repeat(16, 1fr)";
// sketchArea.style.gridTemplateRows = "repeat(16, 1fr)";

// for (let i = 0; i < 256; i++) {
//   //i represents each row
//   let square = document.createElement("div"); //set class for these divs?
//   square.addEventListener("mouseenter", () => {
//     if (currentColor === "random") {
//       let randColor = "#" + Math.floor(Math.random() * 0xffffff);
//       square.style.backgroundColor = randColor;
//     } else square.style.backgroundColor = currentColor;
//   });
//   square.style.backgroundColor = "white";
//   sketchArea.insertAdjacentElement("beforeend", square);
//   square.classList.add("boxes");
//   squares.push(square);
// }

function setWhite() {
  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
  currentColor = "black";
}
document.getElementById("white").addEventListener("click", setWhite);

function setBlack() {
  for (let square of squares) {
    square.style.backgroundColor = "black";
  }
  currentColor = "white";
}
document.getElementById("black").addEventListener("click", setBlack);
//write function to change all existing black squares to white and white squares to black.

function setRandom() {
  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
  currentColor = "random";
}
document.getElementById("random").addEventListener("click", setRandom);

//function reset() {} //resets the board to blank with current settings

//logic
function setSize() {
  //if number is less than 4 set to 4 greater than 64 set to 64
  gridSize = Number(userInput.value);
  setup();
} //resets size of the board based on user input
document.getElementById("setSize").addEventListener("click", setSize);

//init
setup();
