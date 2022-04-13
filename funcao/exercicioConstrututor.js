function Obj(param1, param2) {
    let inicio = 0

    this.atributoObj = function () {
        if (inicio + param1 <= param2) {
            inicio += param1
        } else {
            inicio = param2
        }
    }
    this.getObjValue = function () {
        return inicio
    }
}

const tenis = new Obj(50, 200)
tenis.atributoObj()
tenis.atributoObj()
tenis.atributoObj()
tenis.atributoObj()
tenis.atributoObj()
console.log(tenis.getObjValue())

function cadObjValue(valorMin = 1.99, valorMax = 200) {
    let valorInicial = 0
    this.addValue = function () {
        if (valorInicial + valorMin <= valorMax) {
            valorInicial += valorMin
        } else {
            valorInicial = valorMax
        }
    }
    this.getObjValue = function () {
        return valorInicial
    }
    this.addDiscount = function () {
        return valorInicial - (valorInicial * 0.1)
    }

}

const ObjetoUm = new cadObjValue(80, 300)
ObjetoUm.addValue()
ObjetoUm.addValue()
ObjetoUm.addValue()
console.log('ObjetoUm com Desconto:', ObjetoUm.addDiscount())
console.log('ObjetoUm Valor:', ObjetoUm.getObjValue())

function Pessoa (nome) {
    const pessoaNome = nome
    this.falar = function() {
        console.log(`Olá meu nome é ${pessoaNome}`)
    }
}

const p1 = new Pessoa('Áureo')
p1.falar()
const p2 = new Pessoa('Random')
p2.falar()

function criarPessoa (nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p3 = new criarPessoa('João')
p3.falar()
