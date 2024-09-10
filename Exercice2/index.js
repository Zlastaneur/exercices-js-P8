// Créez votre fonction ici
function calculate(num1, num2, operator) {
    let output

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    switch (operator) {
        case "+":
            output = num1 + num2
            break
        case "-":
            output = num1 - num2
            break
        case "/":
            if (num2 === 0) {
                output = "Division by zero is not allowed"
            } else {
                output = num1 / num2
            }
            break
        case "*":
            output = num1 * num2
            break
        default: output = "Invalid operator"
            break
    }
    return output
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'))   // Affiche 8
console.log(calculate(10, 4, '-'))  // Affiche 6
console.log(calculate(7, 2, '*'))   // Affiche 14
console.log(calculate(12, 3, '/'))  // Affiche 4
console.log(calculate(8, 0, '/'))   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'))   // Affiche "Invalid operator"

export default calculate
