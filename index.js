let firstNumber = null;
let secondNumber = null;
let operatorMath = null;
const oneLiner = document.querySelector("#one-liner");
const buttonSpecial = btnContainer.querySelector(".button-special");

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "DIVIDING BY 0 PROHIBITED" : a / b; }

function operate(op, a, b) {
    let result;
    switch (op) {
        case "+": result = add(a, b); break;
        case "-": result = subtract(a, b); break;
        case "x": result = multiply(a, b); break;
        case "/": result = divide(a, b); break;
        default: return "ERROR";
    }
    return Number.isFinite(result) ? parseFloat(result.toFixed(4)) : result;
}

const buttonsNumbers = btnContainer.querySelectorAll(".button-calculator");
buttonsNumbers.forEach(button => {
    button.addEventListener("click", () => {
        oneLiner.innerText += button.innerText;
    });
});

function processOperation(event) {
    const operatorButton = event.target.innerText;
    let result;

    if (operatorButton === "clear") {
        firstNumber = null;
        secondNumber = null;
        operatorMath = null;
        buttonSpecial.disabled = false;
        oneLiner.innerText = "";
    } else if (operatorButton === "=") {
        if (firstNumber !== null && operatorMath) {
            secondNumber = Number(oneLiner.innerText) || firstNumber;
            result = operate(operatorMath, firstNumber, secondNumber);
            oneLiner.innerText = result;
            firstNumber = result;
            secondNumber = null;
            buttonSpecial.disabled = false;
        }
    } else if (operatorButton === ".") {
        if (!oneLiner.innerText.includes(".")) {
            oneLiner.innerText += ".";
            buttonSpecial.disabled = true;
        }
    } else if (operatorButton === "<-") {
        oneLiner.innerText = oneLiner.innerText.slice(0, -1);
        if (!oneLiner.innerText.includes(".")) {
            buttonSpecial.disabled = false;
        }
    } else {
        firstNumber = Number(oneLiner.innerText);
        operatorMath = operatorButton;
        oneLiner.innerText = "";
        buttonSpecial.disabled = false;
    }
}

const buttonsOperators = btnContainer.querySelectorAll(".button-operator");
buttonsOperators.forEach(button => {
    button.addEventListener("click", processOperation);
});
