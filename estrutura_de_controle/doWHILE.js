function getRamdomBetween (min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option //diferente do while o 'do - while', não precisa atribuir um valor inicial para essa variável

do {
    option = getRamdomBetween (-1, 10)
    console.log(`Option Choice is ${option}.`)
} while (option != -1)

console.log('to the next')