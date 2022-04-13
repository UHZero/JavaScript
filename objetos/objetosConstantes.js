// pessoa -> 123 -> {...}
const pessoa = {nome: 'Zero'}
pessoa.nome = 'Z3r0'
console.log(pessoa)

//pessoa -> 456 -> {...}
// pessoa = {nome: 'ABC'} //gera um erro por apontar outro endereço na memória para uma constante

Object.freeze(pessoa) //congela o objeto fazendo com que a sproximas interações sejam ignoradas.

pessoa.nome = 'XXX'
pessoa.end = 'Rua ETC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'NomeConstante'})
pessoaConstante.nome = 'NomeQualquer'
console.log(pessoaConstante)