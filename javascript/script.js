let displayNumber = '';
let firstNumber = '';
let lastNumber = '';
let chosenOperator = '';
let result = '';

function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function multiply (x, y) {
	return x * y;
}

function divide (x, y) {
  return x / y;
}

// Console Log
//console.log(add(1,2));
//console.log(subtract(1,2));
//console.log(multiply(1,2));
//console.log(divide(1,2));

function callOperator(symbol) {
	chosenOperator += symbol;

	if (chosenOperator.length == 2) {
		one = chosenOperator.slice(0, 1);
		two = chosenOperator.slice(1, 2);
		chosenOperator = one;
		operate();
		chosenOperator = two;

	}
	firstNumber = displayNumber;
	displayNumber = '';

}


function operate() {
	firstNumber = parseFloat(firstNumber);
	lastNumber = parseFloat(displayNumber);

  if (chosenOperator == '+') {
    result = add(firstNumber, lastNumber);
  } else if (chosenOperator == '-') {
    result = subtract(firstNumber, lastNumber);
  } else if (chosenOperator == 'x') {
    result = multiply(firstNumber, lastNumber);
  } else if (chosenOperator == '/'){
		if (firstNumber == 0 && lastNumber == 0){
			document.getElementById('screenText').innerHTML = "ERROR";
			return;
		}
    result = divide(firstNumber, lastNumber);
  }

	displayNumber = result;
	document.getElementById('screenText').innerHTML = result;
	chosenOperator = '';
	//console.log(displayNumber);
}

// Console Log
//console.log(operate(add, 1, 3));


function populate(number) {

  if ((number == "float") && (displayNumber.toString().indexOf('.') != -1)) {
    return;
  } else if (number == "float"){
    displayNumber += ".";
		document.getElementById('screenText').innerHTML = displayNumber;
    return;
  } else {
    string = number.toString();
  }

  if ((displayNumber.length >= 18) || (displayNumber >= 999999999)) {
    return;
  } else {
    displayNumber += string;
    document.getElementById('screenText').innerHTML = displayNumber;
  }
}

function clearDisplay() {
	displayNumber = '';
	firstNumber = '';
	lastNumber = '';
	chosenOperator = '';
	document.getElementById('screenText').innerHTML = displayNumber;
	return;
}

function deleteLast() {
	displayNumber = displayNumber.slice(0, -1);
	document.getElementById('screenText').innerHTML = displayNumber;
}
