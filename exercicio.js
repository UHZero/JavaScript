/* 1)Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
const funcao = function(x, y) {
    return {
        soma: x + y,
        sub: x - y,
        mult: x * y,
        div: x / y
    }
}

console.log(funcao(5, 5))

/* 2) Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. */
const calcTriangulo = function (a = 0, b = 0, c = 0) {
    if (a === b && b === c) {
        return 'equilatero'
    } else if ((a == b && a != c) | (b == c && b != a) | (c == a && c != b)) {
        return 'isóceles'
    } else {
        return 'escaleno'
    }
}
 console.log(calcTriangulo(6, 4, 3))

 // 3) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 const baseExp = function (base, expoente) {
     return base ** expoente
 }
 console.log(baseExp(5, 5))

 /* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
const divRest = function (dividendo, divisor) {
    return {
        divisao: dividendo / divisor,
        resto: dividendo % divisor
    }
}
console.log(divRest(100, 3))

/* 5) Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/
const boolFix = function (setValue) {
    valorFormatado = `R$ ${setValue.toFixed(2).toString().replace('.', ',')}`
    console.log(valorFormatado)
}
boolFix(0.1 + 0.2) //tive que olhar a resposta, ESRUDAR MAIS ESSE TIPO DE SITUAÇÃO

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */
const aplicaAqui = function (capInicial, taxaJuros, tempoAplic) {
    const retornoSimples = capInicial + ((capInicial * taxaJuros) * tempoAplic)
    const retornoComposto = capInicial * (1 + taxaJuros) ** tempoAplic
    console.log(retornoSimples)
    console.log(retornoComposto.toFixed(2).toString().replace('.',','))
}

aplicaAqui(500, 0.05, 30)

// ainda sobre questão 6 - resolução do professor:
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

/* 7) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

const bhaskara = function (ax2, bx, c) {
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return 'Delta é negativo!'
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

