const pessoa = {
    nome: 'Zero',
    idade: 99,
    peso: 47
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) //usando destructuring

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writeable: false,
    value: '01/01/0000'
})

pessoa.dataNascimento = '01/02/1111'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)