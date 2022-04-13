function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado (pertence apenas ao escopo da função)
    let velocidadeAtual = 0

    //método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //inicia com os parametros padrão da função Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const lamborguini = new Carro (390, 35) //inicia com os novos valores  setados
lamborguini.acelerar()
lamborguini.acelerar()
lamborguini.acelerar()
lamborguini.acelerar()
lamborguini.acelerar()
console.log(lamborguini.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof lamborguini)