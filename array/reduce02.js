const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Desafio 1: Todos os alunos são bolsistas?
const getBolsista = (e) => e.bolsista;
const allBolsista = (a, b) => a && b
const resultado01 = alunos.map(getBolsista).reduce(allBolsista);
const x = () => {
    if(!resultado01) {
        return 'Não'
    }else {
        return 'Sim'
    }
}

console.log(x())

// Desafio 2: Algum aluno é bolsista?
const anyBolsista = (a, b) => a || b;
const resultado02 = alunos.map(getBolsista).reduce(anyBolsista);
const y = () => {
    if(!resultado02) {
        return 'Não'
    }else {
        return 'Sim'
    }
}

console.log(y())