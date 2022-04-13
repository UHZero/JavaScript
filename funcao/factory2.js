function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.4
    }
}

console.log(criarProduto('Smartphone', 1234))
console.log(criarProduto('Notebook', 1999.89))