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

//displaying the current number
const calculatorDisplay = document.querySelector('.display')

//adding event listeners to all of the number buttons
const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach((currentNumberButton) => {
    currentNumberButton.addEventListener('click', () => {
        displayValue = displayValue + currentNumberButton.textContent
    })
})
