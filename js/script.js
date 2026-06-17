const display = document.querySelector('.display');
    let currentInput = '';

    // Adds a number or operator to the screen
    function appendValue(value) {
      if (currentInput === '0' && value !== '.') {
        currentInput = '';
      }
      currentInput += value;
      display.innerText = currentInput;
    }

    // Wipes the entire screen clean (AC)
    function clearAll() {
      currentInput = '0';
      display.innerText = currentInput;
      currentInput = ''; 
    }

    // Removes only the very last character (DEL)
    function deleteLast() {
      // Ensure we are working with a string (in case a result was just calculated)
      currentInput = currentInput.toString();
      
      // If there's more than one character, slice off the last one
      if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
      } else {
        // If it's the last character, reset back to empty
        currentInput = '';
      }
      
      // Update the display, showing '0' if the input is empty
      display.innerText = currentInput === '' ? '0' : currentInput;
    }

    // Does the actual math
    function calculate() {
      try {
        let result = eval(currentInput); 
        display.innerText = result;
        currentInput = result.toString(); 
      } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
      }
    }

    // Set initial zero on load
    clearAll();