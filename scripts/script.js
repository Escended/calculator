function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
    return result;
}
// get number
let firstNumber = "";
let nextNumber = "";
let op = '';
let isEquals = false;

function getNumber() {
    let numbers = document.querySelectorAll('.numbers');

    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (isEquals) {
                clear();
            }
            if (firstNumber.length < 8 && op === '') {
                firstNumber += number.textContent;
                displayOnScreen(firstNumber);
            } else if (nextNumber.length < 8) {
                nextNumber += number.textContent;
                displayOnScreen(nextNumber);
            }
        })
    });
}

function clear() {
    firstNumber = "";
    nextNumber = "";
    op = "";
    isEquals = false;
}

function checkEquals() {
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', () => {
        isEquals = true;
        let sum = operate(op, firstNumber, nextNumber);
        displayOnScreen(sum);
    });
}

// Display current number on screen
function displayOnScreen(input) {
    let screen = document.querySelector('.screen');
    screen.textContent = input;
}

// get operator
function getOperator() {
    let operators = document.querySelectorAll('.operators');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            op = operator.textContent;
            console.log(op);
        });
    });
}

function doCalc() {
    getNumber();
    getOperator();
    checkEquals();
}

doCalc();
