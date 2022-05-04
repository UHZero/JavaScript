/* 1) Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final. */
const retornaOla = (nome = 'Zero') => `Olá, ${nome}!`
console.log(retornaOla('Áureo'))

console.log('-------------------------')
/* 2) Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. */
const idadeEmDias = (idade) => `Sua idade é ${idade}, em dias é ${idade * 365}!`
console.log(idadeEmDias(27))

console.log('-------------------------')
/* 3) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */
const salarioX = (valorHora, horaTrabalhada) => `Salário igual a: ${(valorHora * horaTrabalhada)}`
console.log(salarioX(10.9, 225))

console.log('-------------------------')
/* 4) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */
const retornaMes = (x) => {
    let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'Agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mes[x - 1]
     
}
console.log(retornaMes(12))

console.log('-------------------------')
/* 5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.*/
const retornaMaior = (num1, num2) => num1 > num2 ? `${num1} é maior ou igual a ${num2}!` : `${num2} é maior ou igual a ${num1}!`
console.log(retornaMaior(8,9))

console.log('-------------------------')
/* 6) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */
const versoDoUniverso = (value) => {
    if(Number(value) || value === true || value === false ){
        switch(value){
        case true: return !true
        case false: return !false
        case value: return `${-value}`
        }
    }else {
        return 'try again with a number or boolean!'
    }
}
console.log(versoDoUniverso(false))
console.log(versoDoUniverso(-54))
console.log(versoDoUniverso(36))
console.log(versoDoUniverso('erro etc..'))

console.log('-------------------------')
/* 7) Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne seo parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetroinclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.*/

const estaEntre = (num, min, max, inc = false) => {
    return inc ? num >= min && num <= max : num > min && num < max
}
console.log(estaEntre(1, 1, 45));

console.log('-------------------------')
/* 8) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação. */
const multMath = (x, y) => {
    return `resultado = ${Math.imul(x, y)}`
}
console.log(multMath(5, 6))

console.log('-------------------------')
/* 9) Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/
const repetirX = (param, nvezes) => {
    let newArray = [];
    for(let i = 0; i < nvezes; i++){
        newArray.push(param)[i]
    }
    return newArray
}
console.log(repetirX('Oi', 3))
console.log(repetirX(6, 3))

console.log('-------------------------')
/* 10) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */
const maisMais = (nvezes, string) => {
    let contador = 0;
    let newString = '';
    while(contador < nvezes){
        newString += string
        contador++
    }
    return newString;
}
console.log(maisMais(6, '+'))

console.log('-------------------------')
/* 11) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo 
array */
const frutas = ['morango', 'banana', 'laranja', 'pessego', 'uva']
const pontas = (array) => {
    let newArray = [];
    newArray.push(array[0])
    newArray.push(array[array.length-1])
    return newArray
}
console.log(pontas(frutas))

console.log('-------------------------')
/* 12) Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o 
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a 
propriedade especificada no segundo parâmetro. */
const copyAndRemove = (obj, prop) => {
    copyObj = (orig) => {
        let copy = (orig instanceof Array) ? [] : {};
        for(i in orig){
            if(orig[i] && typeof orig[i] ==='object') copy[i] = copyObj(orig[i])
            else copy[i] = orig[i]
        }
        return copy
    }

    const attr = prop;
    const xis = copyObj(obj)

    removeProp = (xis, prop) => {
        const newObj = xis;
        let propriedade = prop
        delete newObj[propriedade]
        return newObj
    }
    return removeProp(xis, attr)
    
}
const objetoX = {id: 0, nome: 'Zero'}
console.log(copyAndRemove(objetoX, 'nome'), objetoX)
console.log(Object.is(copyAndRemove(objetoX, 'nome'), objetoX))

console.log('-------------------------')
/* 13) Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no 
array recebido como parâmetro */
const nFilter = (array) => {
    let newArray = [];
    for(i in array){
        if(typeof array[i] == 'number'){
            newArray.push(array[i])
        }
    }
    return newArray;
}
const arrayQlqr = ['string', {}, 0, 'nome', 9, 7, 'bacon']
console.log(nFilter(arrayQlqr))

console.log('-------------------------')
/* 14) Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada 
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.*/
const testeA = {id: 0, name: 'Zero'}
const conversao = (objc) => {
    const chave = Object.keys(objc)
    const valor = Object.values(objc)

    let _newArray = [];
    for(let i = 0; i < chave.length; i++){
        _newArray.push([chave[i], valor[i]])
    }

    return _newArray

}
console.log(conversao(testeA))

console.log('-------------------------')
/* 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são 
pares e que também tenham índices pares. */
const paresComIndicePar = (array) => {
    let newArray = [];

    for(i in array){
        if(array[i] > 9 && array[i]%2==0)
        newArray.push(array[i])
    }
    return newArray
}
const arrayParImpar = [1, 3, 5, 6, 8, 9, 10, 14, 11, 15, 19, 22]
console.log(paresComIndicePar(arrayParImpar))

console.log('-------------------------')
/* 16) A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos 
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, 
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele 
é bissexto ou não */

const anoBisexto = (ano) => {
    if(ano <= 0){
        return false
    }else if(ano%400==0){
        return true
    }else if(ano%100==0){
        return false
    }else if(ano%4==0){
        return true
    }else{
        return false
    }
}
console.log(anoBisexto(2500))

console.log('-------------------------')
/* 17) Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */
const somaI = (array) => {
    const soma = (a, b) => a + b
    const resultado = array.reduce(soma)
    return resultado
}
const arrayS = [10, 10, 10, 20]
console.log(somaI(arrayS))

console.log('-------------------------')
/* 18) Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/
const despesasTotais = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150},
    {nome:"teste", categoria: "teste", valor: 0.01}
];
const calcularDespesas = (array) => {
    const getValue = (array) => {
        let newArray = [];
        array.map(e => {
            for (i in e) {
                if (typeof e[i] == 'number') {
                    newArray.push(e[i])
                }
            }
        })
        return newArray
    }
    
    const getPreco = getValue(array)
    const somaTela = getPreco.slice(',').join(' + ')

    const soma = (a, b) => a + b

    const resultado = getPreco.reduce(soma)

    return `${somaTela} = ${resultado}`
}
console.log(calcularDespesas(despesasTotais))

console.log('-------------------------')
/* 19) Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */
const calculaMedia = (array) => ((array.reduce((a, b) => a + b))/array.length).toFixed(2)
const arrayMedia = [8.9, 9.8, 2.5, 4.6]
console.log(calculaMedia(arrayMedia))

console.log('-------------------------')
/* 20) Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */
const areaTriangulo = (base, altura) => `Área do Triangulo: ${((base*altura)/2).toFixed(2)}`
console.log(areaTriangulo(10, 5))

console.log('-------------------------')
/* 21) Criar uma função que receba um array de números e retorne o menor número desse array. */
const menorNumero = (array) => array.reduce((a, b) => a < b ? a : b)
const arrayMenor = [3, 6, -8, 2, 1, 0]
console.log(menorNumero(arrayMenor))

console.log('-------------------------')
/* 22)  */
