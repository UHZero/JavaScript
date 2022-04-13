const name = 'Mistyy';
const concatenacao = 'Olá ' + name + '!';
const template = `
    Olá 
    ${name}!`;

console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = string => string.toUpperCase(); //função arrow atribuida a uma variavel, neste exemplo para transformar todas palavras em UPPERCASE
console.log(`Ei... ${up('cuidado')}!`);

//basicamente uma template string precisa ser escrita com crase ex: console.log(`xxx... ${var('')}`);