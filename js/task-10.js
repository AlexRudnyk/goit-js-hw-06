// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// 1.	Размеры самого первого <div> - 30px на 30px.
// 2.	Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3.	Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

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
      "beforeend",
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
