const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

function replace() {
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue ? trimmedValue : 'Anonymous';
}

input.addEventListener('input', replace);