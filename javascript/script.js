const screenText = document.querySelector('[calc-screenText]');
const clear = document.querySelector('[calc-clear]');
const remove = document.querySelector('[calc-delete]');
const operator = document.querySelectorAll('[calc-operator]');
const number = document.querySelectorAll('[calc-number]');
const equals = document.querySelector('[calc-equals]');

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

number.forEach(button => {
    button.addEventListener('click', function () {
        appendNumber(button.innerHTML);
    })
})

function appendNumber(number) {
  if ((displayNumber.length >= 18) || (displayNumber >= 999999999)) {
    if (number === '.' && displayNumber.includes('.')) return;
      return;
    }

    //if ((chosenOperator == '') && (displayNumber !== '')) {
		//displayNumber = number;
		//screenText.innerHTML = displayNumber;
		//return;
    //}

    displayNumber += number;
    screenText.innerText = displayNumber;
}

equals.addEventListener('click', function () {
  //  if (previousOperand.innerText === '') {
    //    return;
  //  }
  operate();
})

function operate() {
	firstNumber = parseFloat(firstNumber);
	lastNumber = parseFloat(displayNumber);

  if (chosenOperator == '+') {
    result = add(firstNumber, lastNumber);
  } else if (chosenOperator == '-') {
    result = subtract(firstNumber, lastNumber);
  } else if (chosenOperator == '×') {
    result = multiply(firstNumber, lastNumber);
  } else if (chosenOperator == '÷'){
		if (firstNumber == 0 && lastNumber == 0){
			screenText.innerHTML = "ERROR";
			return;
		}
    result = divide(firstNumber, lastNumber);
  }

	displayNumber = result;

	screenText.innerHTML = result;
  chosenOperator = '';

}
