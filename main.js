// Getting numbers
var number1 = parseInt(prompt("Enter the first number", 0));
var number2 = parseInt(prompt("Enter the second number", 0));

// Data type verification
while (number1 < 0 || isNaN(number1) || number2 < 0 || isNaN(number2)) {
  // We already defined the variables
  number1 = parseInt(prompt("Enter the first number", 0));
  number2 = parseInt(prompt("Enter the second number", 0));
}

var result =
  "Addition is: " + (number1 + number2) +
  "<br/>" +
  "Subtraction is: " + (number1 - number2) +
  "<br/>" +
  "Division is: " + (number1 / number2) +
  "<br/>" +
  "Multiplication is: " + (number1 * number2);

document.write(result);

var CMDresult =
  "Addition is: " + (number1 + number2) +
  "\n" +
  "Subtraction is: " + (number1 - number2) +
  "\n" +
  "Division is: " + (number1 / number2) +
  "\n" +
  "Multiplication is: " + (number1 * number2);

alert(CMDresult);
console.log(CMDresult);