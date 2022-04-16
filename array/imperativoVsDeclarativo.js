const alunos = [
     {aluno: 'Aureo', nota: 8.8 },
     { aluno: 'Jorge', nota: 7.6 }
]

// Imperativo
let notas1 = 0;
for(let i = 0; i < alunos.length; i++) {
    notas1 += alunos[i].nota
}
console.log(notas1 / alunos.length);

// Declarativo
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const notas2 = alunos.map(getNota).reduce(soma) / alunos.length;
console.log(notas2)