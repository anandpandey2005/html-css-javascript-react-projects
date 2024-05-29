document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calculator_display2');
    let currentInput = '';
    let previousInput = '';
    let operator = null;
    let shouldResetDisplay = false;
  
    function updateDisplay() {
      display.textContent = currentInput  || '0 ';
    }
  
    function handleNumber(number) {
      if (shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
      } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
      }
      updateDisplay();
    }
  
    function handleOperator(nextOperator) {
      if (operator && !shouldResetDisplay) {
        calculate();
      }
      operator = nextOperator;
      previousInput = currentInput;
      shouldResetDisplay = true;
    }
  
    function calculate() {
      if (!operator || shouldResetDisplay) return;
  
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
      if (isNaN(prev) || isNaN(current)) return;
  
      let result;
      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case 'X':
          result = prev * current;
          break;
        case '÷':
          result = prev / current;
          break;
        case '%':
          result = prev % current;
          break;
        case '1/X':
          result = 1 / prev;
          break;
        case 'X²':
          result = prev * prev;
          break;
        case '√':
          result = Math.sqrt(prev);
          break;
        default:
          return;
      }
      currentInput = result.toString();
      operator = null;
      shouldResetDisplay = true;
      updateDisplay();
    }
  
    function clear() {
      currentInput = '';
      previousInput = '';
      operator = null;
      shouldResetDisplay = false;
      updateDisplay();
    }
  
    function handleSpecialOperation(operation) {
      const value = parseFloat(currentInput);
      if (isNaN(value)) return;
      let result;
      switch (operation) {
        case '1/X':
          result = 1 / value;
          break;
        case 'X²':
          result = value * value;
          break;
        case '√':
          result = Math.sqrt(value);
          break;
        default:
          return;
      }
      currentInput = result.toString();
      shouldResetDisplay = true;
      updateDisplay();
    }
  
    function handlePlusMinus() {
      if (currentInput.charAt(0) === '-') {
        currentInput = currentInput.slice(1);
      } else {
        currentInput = '-' + currentInput;
      }
      updateDisplay();
    }
  
    document.getElementById('calculator_buttons').addEventListener('click', (event) => {
      const target = event.target;
      if (!target.matches('button')) return;
  
      const value = target.textContent;
  
      if (value >= '0' && value <= '9') {
        handleNumber(value);
      } else if (value === '.') {
        if (!currentInput.includes('.')) {
          currentInput += '.';
          updateDisplay();
        }
      } else if (value === 'C' || value === 'CLEAR' || value === 'CE') {
        clear();
      } else if (value === '=') {
        calculate();
      } else if (['+', '-', 'X', '÷', '%'].includes(value)) {
        handleOperator(value);
      } else if (['1/X', 'X²', '√'].includes(value)) {
        handleSpecialOperation(value);
      } else if (value === '+/-') {
        handlePlusMinus();
      }
    });
  
    updateDisplay();
  });
  