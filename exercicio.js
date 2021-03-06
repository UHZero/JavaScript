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

console.log('------------------')
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

console.log('------------------')
// 3) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
const baseExp = function (base, expoente) {
    return base ** expoente
}
console.log(baseExp(5, 5))

console.log('------------------')
/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
const divRest = function (dividendo, divisor) {
    return {
        divisao: dividendo / divisor,
        resto: dividendo % divisor
    }
}
console.log(divRest(100, 3))

console.log('------------------')
/* 5) Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/
const boolFix = function (setValue) {
    valorFormatado = `R$ ${setValue.toFixed(2).toString().replace('.', ',')}`
    console.log(valorFormatado)
}
boolFix(0.1 + 0.2) //tive que olhar a resposta, ESRUDAR MAIS ESSE TIPO DE SITUAÇÃO

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
/* 11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando  true ou false.   */



const bissexto = function (anoAtual) {
    if (anoAtual <= 0) {
        return false
    } else if (anoAtual % 400 == 0) {
        return true
    } else if (anoAtual % 100 == 0) {
        return false
    } else if (anoAtual % 4 == 0) {
        return true
    } else {
        return false
    }
}


console.log(bissexto(1500))
console.log(bissexto(800))
console.log(bissexto(2000))
console.log(bissexto(2022))
console.log(bissexto(2020))

console.log('------------------')
// 12)​ Faça um algoritmo que calcule o fatorial de um número.
const fatorialN = (fator) => {
    if (fator == 0) {
        return 1
    } else {
        return fator * fatorialN(fator - 1)
    }
}

console.log(fatorialN(10))

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
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

console.log('------------------')
/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const runNumber = (numberToString) => {
    switch (numberToString) {
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

console.log('------------------')
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
    switch (codigoItem) {
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

console.log('------------------')
/*  20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function withdrawMoney(withdrawValue) {
    let amount100 = 0;
    let amount50 = 0;
    let amount10 = 0;
    let amount5 = 0;
    let amount1 = 0;
    let ceduleValue = calculatedAmount(withdrawValue);
    while (withdrawValue >= ceduleValue) {
        switch (ceduleValue) {
            case 100:
                withdrawValue -= 100
                amount100++
                break
            case 50:
                withdrawValue -= 50
                amount50++
                break
            case 10:
                withdrawValue -= 10
                amount10++
                break
            case 5:
                withdrawValue -= 5
                amount5++
                break
            case 1:
                withdrawValue -= 1
                amount1++
                break
        }

        ceduleValue = calculatedAmount(withdrawValue);

    }

    return totalAmount(amount100, amount50, amount10, amount5, amount1);

}

function calculatedAmount(withdrawValue) {
    if (withdrawValue >= 100) {
        return 100
    } else if (withdrawValue >= 50) {
        return 50
    } else if (withdrawValue >= 10) {
        return 10
    } else if (withdrawValue >= 5) {
        return 5
    } else if (withdrawValue >= 1) {
        return 1
    }
}

function totalAmount(amount100, amount50, amount10, amount5, amount1) {
    let total = ''

    if (amount100 > 0) {
        total += `${amount100} cedule(s) of $100.`
    }

    if (amount50 > 0) {
        total += `${amount50} cedule(s) of $50.`
    }

    if (amount10 > 0) {
        total += `${amount10} cedule(s) of $10.`
    }

    if (amount5 > 0) {
        total += `${amount5} cedule(s) of $5.`
    }

    if (amount1 > 0) {
        total += `${amount1} cedule(s) of $1.`
    }

    return total;

}

console.log(withdrawMoney(521))

//fixando o exercicio 20

function caixaEletronico(valorSaque) {
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;
    let totalNotas = montanteNotas(valorSaque);
    while (valorSaque >= totalNotas) {
        switch (totalNotas) {
            case 100:
                valorSaque -= 100;
                nota100++
                break
            case 50:
                valorSaque -= 50;
                nota50++
                break
            case 10:
                valorSaque -= 10;
                nota10++
                break
            case 5:
                valorSaque -= 5;
                nota5++
                break
            case 1:
                valorSaque -= 1;
                nota1++
                break
        }
        totalNotas = montanteNotas(valorSaque);
    }
    return quantidadeNotas(nota100, nota50, nota10, nota5, nota1);
}

function montanteNotas(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function quantidadeNotas(nota100, nota50, nota10, nota5, nota1) {
    let notasAreceber = ''
    if (nota100 > 0) {
        notasAreceber += `${nota100} nota(s) de 100R$.`
    }

    if (nota50 > 0) {
        notasAreceber += `${nota50} nota(s) de 50R$.`
    }

    if (nota10 > 0) {
        notasAreceber += `${nota10} nota(s) de 10R$.`
    }

    if (nota5 > 0) {
        notasAreceber += `${nota5} nota(s) de 5R$.`
    }

    if (nota1 > 0) {
        notasAreceber += `${nota1} nota(s) de 1R$.`
    }

    return notasAreceber;
}

console.log(caixaEletronico(948));

console.log('------------------')
/*  21)Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130  */

const planoSaude = (idade) => {
    let idadeMenorQue10 = 80;
    let idadeEntre10e30 = 50;
    let idadeMaisQue30ate60 = 95;
    let idadeMaiorQue60 = 130;

    if (idade < 10) {
        return `O valor a ser pago é ${(100 + idadeMenorQue10).toFixed(2).replace('.', ',')}R$.`
    } else if (idade >= 10 && idade <= 30) {
        return `O valor a ser pago é ${(100 + idadeEntre10e30).toFixed(2).replace('.', ',')}R$.`
    } else if (idade > 30 && idade <= 60) {
        return `O valor a ser pago é ${(100 + idadeMaisQue30ate60).toFixed(2).replace('.', ',')}R$.`
    } else if (idade > 60) {
        return `O valor a ser pago é ${(100 + idadeMaiorQue60).toFixed(2).replace('.', ',')}R$.`
    } else {
        return 'valor inválido!'
    }
}

console.log(planoSaude(8));
console.log(planoSaude(22));
console.log(planoSaude(34));
console.log(planoSaude(66));
console.log(planoSaude('string'));

console.log('------------------')
/*  22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const anuidadeAssociacao = (mes, valor) => {
    if (mes > 0 && mes <= 12) {
        atraso = mes - 1
        return `Valor da anuidade: ${(valor * ((1 + 0.05) ** atraso)).toFixed(2).replace('.', ',')}R$.`
    } else {
        return 'Mês inválido'
    }
}
console.log(anuidadeAssociacao(10, 99.80))

console.log('------------------')
/* 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.  */

const mediaPonderada = (codAluno, nota1, nota2, nota3) => {
    let notasAluno = [];
    notasAluno.push(nota1);
    notasAluno.push(nota2);
    notasAluno.push(nota3);
    notasAluno.sort()
    console.log(notasAluno)
    let notasMedia = ((notasAluno[2] * 4) + (notasAluno[1] * 3) + (notasAluno[0] * 3)) / 10;

    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média Final: ${notasMedia.toFixed(2)}, ${notasMedia < 5 ? 'Reprovado!' : 'Aprovado!'}`)
}
mediaPonderada(123, 7.8, 3.9, 5.9)
mediaPonderada(123, 6, 3.9, 5)

console.log('------------------')
/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

function helloWorld() {
    let i = 0;
    while (i < 11) {
        console.log(i + 1, 'Hello World!')
        i++
    }
}
helloWorld()

console.log('------------------')
/* 25) ​Escrever um programa para exibir os números de 1 até 50 na tela. */

const deUmAteCinquenta = () => {
    let i = 0;
    while (i < 50) {
        console.log('N°:', i + 1)
        i++;
    }
}
deUmAteCinquenta()

console.log('------------------')
/* 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.  */

const acharPar = () => {
    console.log('acharPar usando while/if/else')
    let i = 0
    while (i < 100) {
        i++
        if (i % 2 === 0) {
            console.log(i, 'Par')
        } else {
            console.log(i, 'Impar')
        }
    }
}
acharPar()

const funcaoPar = () => {
    console.log('funcaoPar usando while')
    let i = 0;
    while (i <= 100) {
        console.log('N°:', i, i++ % 2 == 0 ? 'Par' : 'Impar')
    }
}
funcaoPar()

console.log('------------------')
/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida */
function comparaAlturas(altura1, taxa1, altura2, taxa2) {
    let tempo = 0;
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            console.log(`Criança 1 passará a Criança 2 em 1 ano.`);
        } else if (taxa1 < taxa2) {
            console.log(`Criança 2 passará a Criança 1 em 1 ano.`);
        } else {
            console.log("As duas crianças possuem a mesma altura");
        }
    } else if (altura1 < altura2) {
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while (altura1 < altura2) {
            altura1 = altura1 + altura1 * taxa1;
            altura2 = altura2 + altura2 * taxa2;
            tempo++;
        }
        console.log(`Criança 1 passou a Criança 2 em ${tempo} ano(s).`);
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
    } else {
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while (altura1 > altura2) {
            altura1 = altura1 + altura1 * taxa1;
            altura2 = altura2 + altura2 * taxa2;
            tempo++;
        }
        console.log(`Criança 2 passou a Criança 1 em ${tempo} ano(s).`);
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
    }
}

comparaAlturas(50, 0.05, 50, 0.06);

// nota exercicio 27 : não entendi porcaria alguma, estudar e tentar resolver sozinho  
console.log('------------------')
/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let vetor = [333, 432, 2113, 121, 36]
const resultante = vetor.map(function (e) { if (e % 2 == 0) { return 'Par' } else { return 'Impar' } })
console.log(resultante)

console.log('------------------')
/* 29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações. */

const achaIntervalo = (vetorDado) => {
    let foundInterval = [];
    let notFound = [];
    for (let i = 0; i < vetorDado.length; i++) {
        if (vetorDado[i] >= 10 & vetorDado[i] <= 20) {
            foundInterval.push(vetorDado[i])
        } else {
            notFound.push(vetorDado[i])
        }
    }
    console.log(`Dentro do Intervalo: ${foundInterval}, Fora do Intervalo: ${notFound}`)
}

let vetorQualquer = [4, 6, 9, 22, 16, 11, 20, 15, 21];


achaIntervalo(vetorQualquer)

console.log('------------------')
/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */
const vetorNumerico = [9, 4, 1, 2, 7];
const pontaMaior = (a, b) => a > b ? a : b
const pontaMenor = (a, b) => a < b ? a : b
const acheAsPontas = (umArray) => `Maior N°: ${umArray.reduce(pontaMaior)}, Menor N°: ${umArray.reduce(pontaMenor)}`
console.log(acheAsPontas(vetorNumerico))

console.log('------------------')
/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console. */
const vetorPossiveisNegativos = [0, 9, -5, 6, -3, 8, -8, 2, 4];

const contaNegativos = (e) => {
    let elementoNegativo = [];
    for (let i = 0; i < e.length; i++) {
        if (e[i] < 0) {
            elementoNegativo.push(e[i])
        }
    }
    return `Elementos Negativos: ${elementoNegativo}, Total de Negativos: ${elementoNegativo.length}`
}
console.log(contaNegativos(vetorPossiveisNegativos));

console.log('------------------')
/* 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.  */
const vetorMedia = [9.8, 5.9, 7.7, 3.1];
const somaVet = (a, b) => a + b;
const mediaCalc = (e) => (e.reduce(somaVet) / e.length).toFixed(2)
console.log(mediaCalc(vetorMedia))

console.log('------------------')
/* 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */
const vetorInteiro = [1, 2, 3, 4, 5, 6];
const vetorString = ['Uma', 'String', 'Qualquer'];
const vetorFloatNumber = [5.59, 4.90, 6.66];
const uniaoVetores = vetorString.concat(vetorInteiro, vetorFloatNumber);
console.log(uniaoVetores)

const uniaoArray = (vetor1, vetor2, vetor3) => vetor1.concat(vetor2, vetor3);
console.log(uniaoArray(vetorInteiro, vetorFloatNumber, vetorString))

console.log('------------------')
/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/
const texto1 = 'abc'
const texto2 = 'adc'
const detectorCaractere = (txt1, txt2) => {
    let caractereContido = true;
    for (let i = 0; i < txt1.length; i++) {
        let capturaCaractere1 = txt1.charAt(i).toLowerCase()
        //console.log(capturaCaractere1)
        for (let z = 0; z < txt2.length; z++) {
            let capturaCaractere2 = txt2.charAt(z).toLowerCase()
            //console.log(capturaCaractere2)
            if (capturaCaractere1 == capturaCaractere2) {
                caractereContido = true
                break
            } else {
                caractereContido = false
            }
        }
        if (!caractereContido) {
            return caractereContido
        }
    }
    return caractereContido
}
console.log(detectorCaractere(texto1, texto2))

// sinceramente não entendi lhufas !!! 
console.log('------------------')
/* 35) ​Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos 
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha 
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao 
final das operações imprima os vetores no console.   */
const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];
const addicionaPilha = (a) => vetorPilha.push(a)
const adicionandoX = (vetorX) => vetorX.map(addicionaPilha)
adicionandoX(vetorAdiciona)
console.log(vetorPilha, vetorAdiciona)

console.log('------------------')
/* 36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5 */
const vetorTeste1 = [6, 3]
const primeiraMult = (vetorZ, Inteiro) => {
    let newVetor = vetorZ.map((e) => e * Inteiro)
    return newVetor
}
console.log(primeiraMult(vetorTeste1, 5))

console.log('------------------')

const vetorTeste2 = [3, 5, 7, 9]
const segundaMult = (vetorZ, Inteiro) => {
    let vetorW = vetorZ.filter((e) => e > 5)
    let newVetor = vetorW.map((e) => e * Inteiro)
    return newVetor
}
console.log(segundaMult(vetorTeste2, 2))

console.log('------------------')
/* 37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos, bem como a soma dos elementos.  */

const progAritimetica = (n, a1, r) => {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
    }
    console.log('Soma: ', (n * (a1 + (a1 + (n - 1) * r))) / 2)
}
progAritimetica(10, 1, 1)

console.log('------------------')

const progGeometrica = (n, a1, r) => {
    for (let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
    }
    console.log(`Soma: ${((a1 * ((r ** n) - 1)) / (r - 1))}`)
}

progGeometrica(10, 2, 2)

console.log('------------------')

/* 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */
const printImpar = (valueInit = 0, valueEnd = 100) => {
    if (valueEnd >= valueInit) {
        for (let i = valueInit; i <= valueEnd; i++) {
            let resultado = i % 2 != 0
            if (resultado === true) {
                console.log(`${i} é ímpar`)
            }
        }
    } else {
        console.log('Parametro Invalido, valor final não pode ser maior que inicial!!!')
    }
}
printImpar(10, 50)
printImpar(60, 50)

console.log('------------------')
/* 39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar. */
const trocaVetor = (vetorX, vetorY) => {
    if (vetorX.length === vetorY.length) {
        for (let i = 0; i < vetorX.length; i++) {
            vetorX[i] = vetorX[i] + vetorY[i]
            vetorY[i] = vetorX[i] - vetorY[i]
            vetorX[i] = vetorX[i] - vetorY[i]
        }
    } else {
        console.log('Vetores de Tamanhos diferentes!!!')
    }
    console.log(`Novo vetorX: ${vetorX}
Novo vetorY: ${vetorY}`)
}
const vetorX = [9, 3, 7];
const vetorY = [6, 3, 1];
trocaVetor(vetorX, vetorY)

console.log('------------------')
/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */
const conceitoABC = (e) => {
    if (e >= 0 && e < 5) {
        return `${e = 'D'}`
    } else if (e >= 5 && e < 7) {
        return `${e = 'C'}`
    } else if (e >= 7 && e < 9) {
        return `${e = 'B'}`
    } else if (e >= 9 && e <= 10) {
        return `${e = 'A'}`
    } else {
        return 'try a number between 0-10!!!'
    }
}
const notasConceito = [3, 6, 8, 10, 11]
const resultado = (array) => console.log(array.map(conceitoABC))
resultado(notasConceito)