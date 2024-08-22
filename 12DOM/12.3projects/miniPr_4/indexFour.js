/** @format */

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainig = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// To check you are available for game or not
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

/*This method guess that which the user give is values or not 
and also check that the values is between 1 and 100 or not.*/
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

/*This method check that the value is equal to random number or not if
true then you won and also check the lower and higher value*/
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("you guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
};

/*This method clean the value to allow user to add new values and also updated the array */
const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainig.innerHTML = `${11 - numGuess}`;
};

/*As we take low or high in query slector then we pass the message and this method print it*/
const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
};
