/* 1)Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
const funcao = function (x, y) {
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
    console.log(retornoComposto.toFixed(2).toString().replace('.', ','))
}

aplicaAqui(500, 0.05, 30)

// ainda sobre questão 6 - resolução do professor:
function jurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
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

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function analiseDePontuacao(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let numeroDeRecords = 0
    let piorPontuacaoTemporada = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            numeroDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorPontuacaoTemporada = i + 1;
        }
    }
    return ['n° de record: ' + numeroDeRecords, 'colocação do pior jogo: ' + piorPontuacaoTemporada + '°']
}

console.log(analiseDePontuacao(stringPontuacoes))

/* 9)  Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de 
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas 
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum 
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou 
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 
e o aluno será aprovado. */
Number.prototype.validacao = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const AprovacaoSis = function (nota) {
    if (nota.validacao(38, 100)) {
        return console.log('aprovado com a nota: ' + Math.ceil(nota / 5) * 5)
    } else if (nota.validacao(0, 37.99)) {
        return console.log('reprovado com a nota: ' + nota)
    } else {
        nota != Number
        return console.log('valor inválido')
    }
}
AprovacaoSis(38)
AprovacaoSis(25)
// descobrir como adaptar para valor invalido caso o usuario insira uma letra ou string no lugar de number

/* 10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false. */

const divisivelPorTres = (inteiro) => {
    if (inteiro % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivelPorTres(4))
console.log(divisivelPorTres(9))

/* 11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando  true ou false.   */



const bissexto = function (anoAtual) {
    if (anoAtual <= 0) {
        return false
    }else if (anoAtual % 400 == 0) {
        return true
    }else if (anoAtual % 100 == 0) {
        return false
    }else if (anoAtual % 4 == 0) {
        return true
    }else {
        return false
    }
}


console.log(bissexto(1500))
console.log(bissexto(800))
console.log(bissexto(2000))
console.log(bissexto(2022))
console.log(bissexto(2020))

// 12)​ Faça um algoritmo que calcule o fatorial de um número.
const fatorialN = (fator) => {
    if (fator == 0) {
        return 1
    }else {
        return fator * fatorialN(fator - 1)
    }
}

console.log(fatorialN(10))

/* 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.  */

const diaUtil = (dia) => {
    switch (dia) {
        case 7:
            console.log(`sábado - fim de semana`)
            break
        case 1:
            console.log(`domingo - fim de semana`)
            break
    case 2: case 3: case 4: case 5: case 6:
        console.log(`${dia}° feira - dia útil`)
        break
    default:
        console.log('dia inválido')
    }
}

diaUtil(1)
diaUtil(7)
diaUtil(3)
diaUtil(8)
diaUtil('sabado')