// script.js

// Get DOM elements
const scoreElement = document.querySelector('.score p');
const diceImage = document.querySelector('.dice img');
const numberButtons = document.querySelectorAll('.number-selection .button-spacing');
const resetButton = document.querySelector('.reset');
const rulesButton = document.querySelector('.rules');
const rulesContainer = document.querySelector('.rules-container');
const closeRulesButton = document.querySelector('.close-rules');

// Variables to store game state
let currentScore = 0;
let selectedNumber = null;

// Function to generate a random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice image based on the rolled number
function updateDiceImage(number) {
  diceImage.src = `/assets/${['one', 'two', 'three', 'four', 'five', 'six'][number - 1]}.png`;
}

// Function to handle the roll dice event
diceImage.addEventListener('click', () => {
  if (selectedNumber === null) {
    alert('Please select a number first.');
    return;
  }

  const rolledNumber = rollDice();
  updateDiceImage(rolledNumber);

  if (rolledNumber === selectedNumber) {
    currentScore += rolledNumber;
  } else {
    currentScore = currentScore - 2;
  }

  scoreElement.textContent = currentScore;
});

// Function to handle number selection
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedNumber = parseInt(button.textContent, 10);

    // Reset styling for all buttons
    numberButtons.forEach((btn) => btn.classList.remove('selected'));

    // Highlight the selected button
    button.classList.add('selected');
  });
});

// Function to reset the game score
resetButton.addEventListener('click', () => {
  currentScore = 0;
  scoreElement.textContent = currentScore;
  selectedNumber = null;

  // Reset styling for all buttons
  numberButtons.forEach((btn) => btn.classList.remove('selected'));

  // Reset the dice image
  updateDiceImage(1);
});

// Function to toggle the rules display
rulesButton.addEventListener('click', () => {
  if (rulesContainer.style.display === 'block') {
    rulesContainer.style.display = 'none';
    rulesButton.textContent = 'Show Rules';
  } else {
    rulesContainer.style.display = 'block';
    rulesButton.textContent = 'Hide Rules';
  }
});

// Function to handle closing the rules
closeRulesButton.addEventListener('click', () => {
  rulesContainer.style.display = 'none';
  rulesButton.textContent = 'Show Rules';
});

// Initialize the game with default values
resetButton.click();
