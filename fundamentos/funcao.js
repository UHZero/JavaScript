// Função sem retorno
function ImprimirSoma (a, b) {
    console.log(a + b)
}
ImprimirSoma(75, 25)

//Função com retorno
function soma(a, b = 1) {
    return a + b
}
console.log(soma(8))

//Armazenar uma função em uma variavel
const imprimirTotal = function (a, b) {
    console.log(a + b)
}
imprimirTotal(7, 3)

//Armazeando uma função arrow em uma variável
const subT = (a, b) => {
    return a - b
}
console.log(subT(66, 60))


//Retorno implícito
const subtracao = (a, b) => a -b
console.log(subtracao(7, 5))

const imprimirString = (a) => console.log(a);
imprimirString('Texto Aleatório')