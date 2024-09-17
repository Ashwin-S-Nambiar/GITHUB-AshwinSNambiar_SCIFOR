
const calculatorScreen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');
let firstValue = '';
let operator = '';
let secondValue = '';

//Event listener to check clicks
keys.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('operator')) {
        if (firstValue !== '' && calculatorScreen.value !== '') {
            operator = target.value;
            firstValue = calculatorScreen.value;
            calculatorScreen.value += ` ${operator} `;
        } else if (calculatorScreen.value !== '') {
            operator = target.value;
            firstValue = calculatorScreen.value;
            calculatorScreen.value += ` ${operator} `;
        }
    }

    if (target.value >= '0' && target.value <= '9') {
        calculatorScreen.value += target.value;
    }

    if (target.classList.contains('equal-sign')) {
        secondValue = calculatorScreen.value.split(' ').pop();
        calculate();
    }

    if (target.classList.contains('all-clear')) {
        clearCalculator();
    }
});


//Calculate the Result
function calculate() {
    let result;
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    calculatorScreen.value = result;
    firstValue = '';
    operator = '';
}

function clearCalculator() {
    firstValue = '';
    operator = '';
    secondValue = '';
    calculatorScreen.value = '';
}