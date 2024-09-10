displayDOM = document.querySelector("#display")

function appendToDisplay(num) {
    displayDOM.value += num
}

function clearDisplay() {
    displayDOM.value = ''
}

function calculateResult() {
    try {
        if (displayDOM.value.includes('/0')) {
            displayDOM.value = "Division by zero is not allowed"
        } else {
            displayDOM.value = eval(displayDOM.value)
        }
    } catch (e) {
        display.value = "Error"
    }
}