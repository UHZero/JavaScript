const pessoa = {
    saudacao: 'Bom dia!',
    usandoBind: 'Função Amarrada com .bind(objeto)',
    falar() {
        console.log(this.saudacao)
    },
    falar2() {
        console.log(this.usandoBind)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e Orientada a Objeto

const falarDePessoa = pessoa.falar2.bind(pessoa)
falarDePessoa()