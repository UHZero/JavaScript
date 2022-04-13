function testeFirst(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')
} //quando o bloco if não tem uma chave associada apenas a primeira sentença é válida, lembrando que JS desconsidera espaço

testeFirst(6);
testeFirst(9);

function testeSecond(num) {
    if(num > 7); {
        console.log(num)
    }
}// executa ambos os valores por ter uma finalização de sentença ;
//não use ponto e virgula com as estruturas de controle CUIDADO!!!;

testeSecond(5)
testeSecond(8)