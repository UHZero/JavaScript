//par nome/valor

const saudacao = 'Mesmo Valor/Nome'; //contexto léxico1

function funct () {
    const saudacao = 'Escopo Diferente'; //contexto léxico2
    return saudacao;
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Mesmo Nome/Valor',
    idade: 00,
    celular: '(00) 9 9999-9999',
    endereco: {
        logradouro: 'rua aleatória e tal',
        numero: 555,
        nome: 'Escopo diferente'
    }
}

console.log(saudacao);
console.log(funct())
console.log(cliente)