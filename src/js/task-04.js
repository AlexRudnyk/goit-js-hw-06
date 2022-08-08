// •	Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// •	Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// •	Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementButton = document.querySelector('[data-action = "decrement"]');
console.log(decrementButton);

const incrementButton = document.querySelector('[data-action = "increment"]');
console.log(incrementButton);

const valueEl = document.querySelector("#value");
console.log(valueEl.textContent);

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
