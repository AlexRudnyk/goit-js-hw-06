// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector("#name-input");
console.log("textInput", textInput);

const textOutput = document.querySelector("#name-output");
console.log("textOutput", textOutput);

textInput.addEventListener("input", (event) => {
  if (textInput.value !== "") {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
