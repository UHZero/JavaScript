const escola = [{
    nome: 'turma A1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.2
    }, {
        nome: 'Annita',
        nota: 7.5
    }]
}, {
    nome: 'turma A2',
    alunos: [{
        nome: 'Traice',
        nota: 9.9
    }, {
        nome: 'Marilia',
        nota: 7.1
    }]
}]

const getNotasAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNotasAluno);

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)