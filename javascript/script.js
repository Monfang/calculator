let displayFirst = '';

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

function operate (x, operator, y) {
  if (operator == add) {
    return add(x, y);
  } else if (operator == subtract) {
    return subtract(x, y);
  } else if (operator == multiply) {
    return multiply(x, y);
  } else if (operator == divide){
    return divide(x, y);
  } return;
}

// Console Log
//console.log(operate(10, divide, 2));



function populate(number) {

  if ((number == "float") && (displayFirst.toString().indexOf('.') != -1)) {
    return;
  } else if (number == "float"){
    displayFirst += ".";
    return;
  } else {
    string = number.toString();
  }

  if ((displayFirst.length >= 18) || (displayFirst >= 999999999)) {
    return;
  } else {
    displayFirst += string;
    document.getElementById('screenText').innerHTML = displayFirst;
  }
}

function clearDisplay() {
	displayFirst = '';
	document.getElementById('screenText').innerHTML = displayFirst;
	return;
}

function deleteLast() {
	displayFirst = displayFirst.slice(0, -1);
	document.getElementById('screenText').innerHTML = displayFirst;
}
