const screenText = document.querySelector('[calc-screenText]');
const clear = document.querySelector('[calc-clear]');
const remove = document.querySelector('[calc-delete]');
const operator = document.querySelectorAll('[calc-operator]');

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

clear.addEventListener('click', function () {
    clearDisplay();
})

function clearDisplay() {
	displayNumber = '';
  firstNumber = '';
  secondNumber = '';
  chosenOperator = '';
  result = '';
	screenText.innerText = '';
}

remove.addEventListener('click', function() {
  deleteLast();
})

function deleteLast() {
	displayNumber = displayNumber.slice(0, -1);
	screenText.innerHTML = displayNumber;
}

operator.forEach(button => {
    button.addEventListener('click', function () {
        chooseOperator(button.innerHTML);
    })
})


function chooseOperator(symbol) {
	firstNumber = displayNumber;
	displayNumber = '';
	chosenOperator = symbol;
	return chosenOperator;
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
