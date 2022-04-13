const notas = [2.2, 3.4, 5.8, 8.9, 6.9]

for (let i in notas) {
    console.log(i, notas[i]) //pode se adicionar /*'-',*/ entre o i, e notas [i]
}

const pessoas = {
    nome: 'Azul',
    sobrenome: 'Verde',
    idade: 66,
    peso: 66 
}

for (let atributo in pessoas) {
    console.log(`${atributo} = ${pessoas[atributo]}`)
}