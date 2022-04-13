const escola = "Cod3r";

console.log(escola.charAt(0)); // retorna o caractere desejado de acordo com a posição
console.log(escola.charCodeAt(3)); // retorna o valor unicode do caractere na tabela ASCII
console.log(escola.indexOf('r', 0)); // pesquisa o elemento fornecido no array https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
console.log(escola.substring(1)); // executa a variavel de acordo com o ponto de partida fornecido
console.log(escola.substring(0, 4)); // vai do ponto de partida nesse caso o 0, até o indice 3 sem incluir o indice 4
console.log('Escola '.concat(escola).concat('!')); // concatena strings
console.log(escola.replace(3, 'e')); //troca o caracter desejado de acordo com a posição desejada!
// é possivel aplicar expressões regulares para usar .replace ex (/\d/) - (/\w/) - (/\w/g) -- fazer o curso de expressão regulares quando possivel
console.log('Dianna,Santos,Moraes'.split(',')); //gera uma array usando um separador definido em .split() tambem é possivel usar regex