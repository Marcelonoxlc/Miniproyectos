let currentInput = '0';

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = '';
  }
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

updateDisplay();
