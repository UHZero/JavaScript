const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //verifica se é um número inteiro e devolve true se a condição for verdadeira
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.8765
const avaliacao2 = 6.9762

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1+peso2);

console.log(media.toFixed(2)); // define o numero de casas decimais a serem impressas
console.log(media.toString()); //retorna como string, se passa o valor toString(2), retorna como binário.
console.log(media.toString(2));
console.log(typeof media); // retorna 'number' que é o tipo de dado
console.log(typeof Number); //retorna 'function' pois é uma função JS

//alguns cuidados
console.log(7/0); //retorna infinity
console.log("10" / 2);
console.log("10,2" / 2); //retorna NaN - Not a Number
console.log(0.1 + 0.7); // de acordo com as especificaçoes de binarios flutuantes aritiméticos, não é 100% preciso
// console.log(10.toString()); não é possivel chamar um literal pondo a função
console.log((10.545).toFixed(2)); // porém é possivel chamar o literal dentro de () e por a função