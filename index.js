function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "ERROR";
    }
    return a / b;
}
let firstNumber;
let secondNumber;
let operator;

function operate(op, a, b) {
    if (op === "add") {
        return add(a, b);
    }

    else if (op === "substract") {
        return subtract(a, b);
    }

    else if (op === "multiply") {
        return multiply(a, b);
    }

    else if (op === "divide") {
        return divide(a, b);
    }

    else {
        return "ERROR";
    }
}
