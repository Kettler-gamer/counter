const addButton = document.querySelector(".counter-add");
const counterDisplay = document.querySelector(".counter-display");

let counter = 0;

addButton.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
