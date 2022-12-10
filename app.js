const addButton = document.querySelectorAll(".counter-btn");
const counterDisplay = document.querySelector(".counter-display");

let counter = 0;

addButton[0].addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
addButton[1].addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});
