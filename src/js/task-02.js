// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
// console.log(listEl);

ingredients.forEach(function (ingredient) {
  const itemEl = document.createElement("li");
  // console.log(itemEl);
  itemEl.textContent = ingredient;
  // console.log(itemEl);
  itemEl.classList.add("item");
  // console.log(itemEl);
  listEl.append(itemEl);
});
