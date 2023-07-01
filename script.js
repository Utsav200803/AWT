//Check the Input values
function validateNumber(input) {
    const value = input.value.trim();
    const errorSpan = document.getElementById(input.id + "Error");
    
    if (value === "") {
      errorSpan.textContent = "* Field cannot be empty";
    } else if (isNaN(value)) {
      errorSpan.textContent = "* Invalid input, please enter a number";
    } else {
      errorSpan.textContent = "";
    }
  }
  
  //Performs arithmetic operations
  function performOperation(operator) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultLabel = document.getElementById("msg");
  
    if (num1 === "" || num2 === "") {
      resultLabel.textContent = "Please enter valid numbers in both fields";
    } else if (isNaN(num1) || isNaN(num2)) {
      resultLabel.textContent = "Invalid input, please enter numbers only";
    } else {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      
      let result;
      switch (operator) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*':
          result = n1 * n2;
          break;
        case '/':
          result = n1 / n2;
          break;
      }
      
      resultLabel.textContent = "Result: " + result;
    }
  }
  