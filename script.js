let expression = '';
let powerOn = false;

function appendNumber(number) {
  if (powerOn) {
    expression += number;
    document.getElementById('display').value = expression;
  }
}

function appendOperator(operator) {
  if (powerOn) {
    expression += operator;
    document.getElementById('display').value = expression;
  }
}

function appendPoint() {
  if (powerOn && !expression.includes('.')) {
    expression += '.';
    document.getElementById('display').value = expression;
  }
}

function clearDisplay() {
  if (powerOn) {
    expression = '';
    document.getElementById('display').value = '0';
  }
}

function calculate() {
  if (powerOn && expression !== '') {
    try {
      let result = eval(expression);
      document.getElementById('display').value = result;
      expression = result.toString();
    } catch (error) {
      document.getElementById('display').value = 'Error';
      expression = '';
    }
  }
}

function off() {
  powerOn = false;
  expression = '';
  document.getElementById('display').value = '';
}

function togglePower() {
  powerOn = !powerOn;
  if (!powerOn) {
    expression = '';
    document.getElementById('display').value = '';
  } else {
    document.getElementById('display').value = '0';
  }
}

function eliminate() {
  if (powerOn && expression.length > 0) {
    expression = expression.slice(0, -1);
    document.getElementById('display').value = expression;
  }
}
