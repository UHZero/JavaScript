// Função em JS é First-Class Object (Citizen)
// Higher-Order Function

//criar de forma literal
function fun1() { }; //function fun1(parâmetroo) { sentença de códigos }

//Armazenar em uma variável
const fun2 = function() { } ;

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](5, 4));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Epa' }
console.log(obj.falar())

//Passar função como parâmetro para outra função
function run (fun) {
    fun()
}

run(function () {console.log('Executando...') });

//Um função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5, 4)(' = nove')
const noveMais = soma(5, 4)
noveMais(' = nove')