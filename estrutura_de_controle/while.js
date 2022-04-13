function getNumberRandom (min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getNumberRandom(-1, 10)
    console.log(`Opção escolhida foi ${option}.`)
}

console.log('See You soon')