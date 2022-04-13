// usando a notação literaL
const obj1 = {};
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)

// Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 8.99, 0.15)
const p2 = new Produto ('Notebook', 3.999, 0.30)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Pedro', 7980, 4)
const f2 = criarFuncionario('Paula', 2966, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Dianna'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)