const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const mapJSON = e => JSON.parse(e)
const obterValor = e => e.preco
const mudarRS = e => `R$ ${e.toFixed(2).replace('.', ',')}`


let printando = carrinho.map(mapJSON).map(obterValor).map(mudarRS)
console.log(printando)


// Retornar um array apenas com os precos
