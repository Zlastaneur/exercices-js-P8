function convertToBinary() {
    resultDOM = document.querySelector("#binaryResult")
    input = document.querySelector("#decimalInput").value

    if (!/^\d+$/.test(input)) {
        resultDOM.innerHTML = ""
    } else {
        const decimalNumber = parseInt(input, 10)
        if (isNaN(decimalNumber)) {
            resultDOM.innerHTML = ""
        } else {
            resultDOM.innerHTML = decimalNumber.toString(2)
        }
    }
}