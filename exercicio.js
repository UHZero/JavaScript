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

/* 14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console */

const quitanda = (fruta) => {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('insira o indentificador correto')
    }
}

quitanda('maçã')
quitanda('kiwi')
quitanda('melancia')
quitanda('maça')

/* 15) ​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda 
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o 
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza 
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: 
“Não trabalhamos com este tipo de automóvel aqui”.  */

const revendaCarro = (modelo) => {
    switch (modelo) {
        case 'hatch':
            console.log('compra efetuada com sucesso')
            break
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

revendaCarro('hatch')
revendaCarro('sedans')
revendaCarro('motocicletas')
revendaCarro('caminhonetes')
revendaCarro('carroX')

/* 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas */

const calcSwitch = (operacao, valor1, valor2) => {
    switch (operacao) {
        case 'soma':
            return valor1 + valor2
        case 'subtracao':
            return valor1 - valor2
        case 'multiplicacao':
            return valor1 * valor2
        case 'divisao':
            return valor1 / valor2
        case 'expoente':
            return valor1 ** valor2
        default:
            return 'parametro não reconhecido'
    }
}

console.log(calcSwitch('soma', 2, 4))
console.log(calcSwitch('subtracao', 2, 4))
console.log(calcSwitch('multiplicacao', 2, 4))
console.log(calcSwitch('divisao', 2, 4))
console.log(calcSwitch('expoente', 2, 4))
console.log(calcSwitch('arroz', 2, 4))

/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo: Plano A = 10%, Plano B = 15%, Plano C = 20%, ​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: */

const planoSalarial = (plano, salarioAtual) => {
    const porcentagem = [0.1, 0.15, 0.2];
    switch (plano) {
        case 'planoA':
            return (salarioAtual * (1 + porcentagem[0])).toFixed(2);
        case 'planoB':
            return (salarioAtual * (1 + porcentagem[1])).toFixed(2);
        case 'planoC':
            return (salarioAtual * (1 + porcentagem[2])).toFixed(2);
        default:
            return 'plano inválido'
    }
}

console.log(planoSalarial('planoA', 1350));
console.log(planoSalarial('planoB', 1350));
console.log(planoSalarial('planoC', 1350));

/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const runNumber = (numberToString) => {
    switch(numberToString){
        case 0: return 'Zero'
        case 1: return 'One'
        case 2: return 'Two'
        case 3: return 'Three'
        case 4: return 'Four'
        case 5: return 'Five'
        case 6: return 'Six'
        case 7: return 'Seven'
        case 8: return 'Eight'
        case 9: return 'Nine'
        case 10: return 'Then'
        default:
            return 'Out of parameter, try 0-10!'
    }
};
console.log(runNumber(0));
console.log(runNumber(1));
console.log(runNumber(2));
console.log(runNumber(3));
console.log(runNumber(4));
console.log(runNumber(5));
console.log(runNumber(6));
console.log(runNumber(7));
console.log(runNumber(8));
console.log(runNumber(9));
console.log(runNumber(10));
console.log(runNumber(11));

/*  ​19) Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente.  */
const cardapioLanchonete = (codigoItem, quantidadeItem) => {
    let CachorroQuente = 3.00;
    let HamburguerSimples = 4.00;
    let Cheeseburguer = 5.50;
    let Bauru = 7.50;
    let Refrigerante = 3.50;
    let Suco = 2.80;
    switch(codigoItem) {
        case 100: return `Item(s) do pedido: Cachorro-quente, Total: ${(CachorroQuente * quantidadeItem).toFixed(2).replace('.', ',')}R$.`
        case 200: return `Item(s) do pedido: Hamburguer-Simples, Total: ${(HamburguerSimples * quantidadeItem).toFixed(2).replace('.', ',')}R$.`
        case 300: return `Item(s) do pedido: Cheeseburguer, Total: ${(Cheeseburguer * quantidadeItem).toFixed(2).replace('.', ',')}R$.`
        case 400: return `Item(s) do pedido: Bauru, Total: ${(Bauru * quantidadeItem).toFixed(2).replace('.', ',')}R$.`
        case 500: return `Item(s) do pedido: Refrigerante, Total: ${(Refrigerante * quantidadeItem).toFixed(2).replace('.', ',')}R$.`
        case 600: return `Item(s) do pedido: Suco, Total: ${(Suco * quantidadeItem).toFixed(2).replace('.', ',')}R$.`
        default: return 'produto não existente!'
    }
}
console.log(cardapioLanchonete(100, 3));
console.log(cardapioLanchonete(200, 1));
console.log(cardapioLanchonete(300, 5));
console.log(cardapioLanchonete(400, 2));
console.log(cardapioLanchonete(500, 1));
console.log(cardapioLanchonete(600, 4));
console.log(cardapioLanchonete(700, 1));

/*  20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */