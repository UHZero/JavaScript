console.log(soma(4, 3)) //devido ao hoisting e ao fato do JS primeiro carregar as funçoes antes de ler o script a função soma pode ser chamada

//function declaration
function soma (x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(5, 4)) //a função só pode ser chamada NA SEQUENCIA EM QUE ELA FOI ESCRITA ou seja depois!

//named function expression
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(2, 2)) //também só pode ser chamada depois ou na sequencia!