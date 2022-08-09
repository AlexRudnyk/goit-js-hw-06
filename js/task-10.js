function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");

const controlsEl = document.querySelector("#controls");

let amount = 0;

inputEl.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
  console.log("Amount: ", amount);
});

function createBoxes() {
  for (let i = 1; i <= amount; i += 1) {
    boxes.insertAdjacentHTML(
      "afterbegin",
      `<div style="width: ${i * 10 + 20 + "px"}; height: ${
        i * 10 + 20 + "px"
      }; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  inputEl.value = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
