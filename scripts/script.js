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
}
// get number
let firstNumber = "";
let nextNumber = "";
let op = '';
let operatorOn = false;
let isEquals = false;

function getNumber() {
    let numbers = document.querySelectorAll('.numbers');

    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (isEquals) {
                clearCalc();
            }
            if (firstNumber.length < 7 && op === '') {
                firstNumber += number.textContent;
                displayOnScreen(firstNumber);
            } else if (nextNumber.length < 7) {
                nextNumber += number.textContent;
                displayOnScreen(nextNumber);
            }
        });
    });
}


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    clearCalc();
    displayOnScreen(0);
});

function clearCalc() {
    firstNumber = "";
    nextNumber = "";
    op = "";
    sum = 0;
    isEquals = false;
}
let sum = 0;
function checkEquals() {
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', () => {
        isEquals = true;
        sum = operate(op, firstNumber, nextNumber);
        displayOnScreen(sum);
    });
}

// Display current number on screen
function displayOnScreen(input) {
    let screen = document.querySelector('.screen');
    let num = parseFloat(input);
    console.log(typeof input);
    // if (num.isFloat) {
    //     input = input.toFixed(5);
    //     console.log("worked");
    // }
    screen.textContent = num.toFixed(2);
}

// get operator
function getOperator() {
    let operators = document.querySelectorAll('.operators');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (operatorOn) {
                firstNumber = operate(op, firstNumber, nextNumber);
                nextNumber = "";
                displayOnScreen(firstNumber);
                console.log("worked");
            }
            op = operator.textContent;
            operatorOn = true;
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
