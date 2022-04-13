//class constuctor
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//arrow function
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Minion')
p2.falar()