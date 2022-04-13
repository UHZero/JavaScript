let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! <-- representa negação (NOT), !! <-- retorna o valor original, (NOT NOT).

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // string, se houver um espaço em branco representa verdadeiro
console.log(!!'texto')
console.log(!![]) // Array, mesmo vazio representa verdadeiro
console.log(!!{}) // Objeto literal, mesmo vazio representa verdadeiro
console.log(!!Infinity) // resultado da divisão por zero
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string, sem nada ou seja vazia, é falso
console.log(!!null) // nulo
console.log(!!NaN) // Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // || <-- representa (OR) OU, se um dos valores forem verdadeiro ele retorna o primeiro encontrado, COMO TEM !! ELE IRA RETORNAR UM BOLEANO true ou false

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // Neste exemplo se a variavel nome estiver vazia ele retorna Desconhecido, se não, retorna o nome.