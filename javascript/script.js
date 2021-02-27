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

function callOperator(symbol) {
	chosenOperator += symbol;

	if (chosenOperator.length == 2) {
		if (displayNumber == '') {
			return;
		}
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

	if (result.toString().length >= 18) {
		document.getElementById('screenText').innerHTML = result.toFixed(4);
	} else if (result >= 999999999){
		document.getElementById('screenText').innerHTML = "STOP DAT";
		return;
	}

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
  }

	//if ((chosenOperator == '') && (displayNumber !== '')) {
	//	displayNumber = number;
	//	document.getElementById('screenText').innerHTML = displayNumber;
	//	return;
  //  }

    string = number.toString();


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
	result = '';
	document.getElementById('screenText').innerHTML = displayNumber;
	return;
}

function deleteLast() {
	displayNumber = displayNumber.slice(0, -1);
	document.getElementById('screenText').innerHTML = displayNumber;
}
