// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'nomeDoProduto';
produto['marca do produto'] = 'D.A.Z.M.'
produto.preco = 1234

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'XX',
    valor: 55555,
    proprietario: {
        nome: 'NomeDoProprietario',
        idade: 55,
        logradouro: {
            rua: 'qualquerRuaDoBrasil',
            numero: 555,
            complemento: 'casa' 
        }
    },
    condutores: [{
        nome: 'queNomeColoco',
        idade: 22
    }, {
        nome: 'semNome',
        idade: 44
    }
    ],
    calcularValorDoSeguro: function () {
        //função
    }
}

carro.proprietario.logradouro.numero = 1000
carro['proprietario']['logradouro']['rua'] = 'Rua AAA'
console.log(carro)

delete carro.condutores
delete carro.proprietario.logradouro
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores) //retorna undefined -- não tentar acessar um atributo de algo indefinido!!!