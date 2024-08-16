//declaring the three parts of a calculation
let firstNumber = 0
let secondNumber = 0
let operator = ''
let displayValue = ''

//declaring the calculator display node
const calculatorDisplay = document.querySelector('.display')

//creating the 4 different operations
function addition(a, b) {
    return a + b
}
function subtraction(a, b) {
    return a - b
}
function multiplication(a, b) {
    return a * b
}
function division(a, b) {
    return a / b
}

//creating the function to use the operations
function operate(first, second, operation) {
    switch (operation) {
        case '+':
            return addition(first, second)
            break
        case '-':
            return subtraction(first, second)
            break
        case '*':
            return multiplication(first, second)
            break
        case '/':
            if (second === '0') {
                alert('we see you dividing by 0, try again bitch')
                firstNumber = 0
                secondNumber = 0
                operator = ''
                displayValue = ''
                calculatorDisplay.textContent = ''
            }
            else {
            return division(first, second)
            }
            break
    }
}



//adding event listeners to all of the number buttons
const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach((currentNumberButton) => {
    currentNumberButton.addEventListener('click', () => {
        displayValue = displayValue + currentNumberButton.textContent
        calculatorDisplay.textContent = displayValue
    })
})

//adding event listeners for the four operators
const operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((currentOperatorButton) => {
    currentOperatorButton.addEventListener('click', () => {
        firstNumber = displayValue
        operator = currentOperatorButton.textContent
        displayValue = ''
        calculatorDisplay.textContent = displayValue
    })
})

//making the equals button function
const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', () => {
    if (operator === '') {
        firstNumber = displayValue
    } else {
        secondNumber = displayValue
        firstNumber = operate(firstNumber, secondNumber, operator)
        if (firstNumber % 1 !== 0) {
            displayValue = firstNumber.toFixed(3)
        }
        else {
            displayValue = firstNumber
        }
        calculatorDisplay.textContent = displayValue
    }
})

//adding functionality to the clear button
const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', function clearPressed() {
    firstNumber = 0
    secondNumber = 0
    operator = ''
    displayValue = ''
    calculatorDisplay.textContent = ''
})
