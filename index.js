//declaring the three parts of a calculation
let firstNumber = 0
let secondNumber = 0
let operator = ''
let displayValue = ''

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
            return division(first, second)
            break
    }
}

//declaring the calculator display node
const calculatorDisplay = document.querySelector('.display')

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
    secondNumber = displayValue
    firstNumber = operate(firstNumber, secondNumber, operator)
    displayValue = firstNumber
    calculatorDisplay.textContent = displayValue
})

//adding functionality to the clear button
const clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', () => {
    firstNumber = 0
    secondNumber = 0
    operator = ''
    displayValue = ''
    calculatorDisplay.textContent = ''
})
