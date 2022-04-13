Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const mapJSON = e => JSON.parse(e)
const obterValor = e => e.preco
const mudarRS = e => `R$ ${e.toFixed(2).replace('.', ',')}`


let printando = carrinho.map2(mapJSON).map2(obterValor).map(mudarRS)
console.log(printando)


// Retornar um array apenas com os precos