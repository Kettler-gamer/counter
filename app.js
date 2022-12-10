const addButton = document.querySelector(".add-button");
const counterDisplay = document.querySelector(".counter-display");

let counter = 0;

addButton.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
