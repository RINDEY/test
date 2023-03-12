const currentYear = 2023;
const correctAnswer = 'Ответ правильный';
const errorAnswer = 'Ответ неправильный';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function() {
  const inputValue = inputNode.value;

  if (!inputValue) {
    return
  }
  
  const answer = Number(inputNode.value);
  let output = correctAnswer;

  if (answer !== currentYear) {
    output = errorAnswer;
  }

  outputNode.innerHTML = output;
});
