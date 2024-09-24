const scoreElement = document.querySelector(".score p");
const diceImage = document.querySelector(".dice img");
const numberButtons = document.querySelectorAll(
  ".number-selection .button-spacing"
);
const resetButton = document.querySelector(".reset");
const rulesButton = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const closeRulesButton = document.querySelector(".close-rules");

let currentScore = 0;
let selectedNumber = null;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(number) {
  diceImage.src = `/assets/${
    ["one", "two", "three", "four", "five", "six"][number - 1]
  }.png`;
}

diceImage.addEventListener("click", () => {
  if (selectedNumber === null) {
    alert("Please select a number first.");
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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedNumber = parseInt(button.textContent, 10);

    numberButtons.forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");
  });
});

resetButton.addEventListener("click", () => {
  currentScore = 0;
  scoreElement.textContent = currentScore;
  selectedNumber = null;

  numberButtons.forEach((btn) => btn.classList.remove("selected"));

  updateDiceImage(1);
});

rulesButton.addEventListener("click", () => {
  if (rulesContainer.style.display === "block") {
    rulesContainer.style.display = "none";
    rulesButton.textContent = "Show Rules";
  } else {
    rulesContainer.style.display = "block";
    rulesButton.textContent = "Hide Rules";
  }
});

closeRulesButton.addEventListener("click", () => {
  rulesContainer.style.display = "none";
  rulesButton.textContent = "Show Rules";
});

resetButton.click();
