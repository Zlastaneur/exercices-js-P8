// Créez votre fonction ici
function calculateAverage(arr) {
    if (!arr || arr.length < 1) {
        return "No numbers to calculate average"
    } else {
        const average = arr.reduce((a, b) => a + b, 0) / arr.length
        return average
    }
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
