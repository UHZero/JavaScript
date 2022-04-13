console.log(Math.ceil(6.1)); //ceil é uma função de Math que arredonda pra cima
console.log(Math.floor(6.9)); //floor é uma função de Math que arredonda pra baixo

const obj1 = {};

obj1.nome = 'www.'; //para criar dinamicamente um atributo dentro de um objeto pode se usar a notação ponto
//obj1['nome'] = "xxx."; //tambem pode se usar este tipo de notação para criar um atributo, não é recomendavel, por não ser tão usual.
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //this torna o parametro 'nome' acessivel fora da função 'deixa público'
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira'); // cria uma função dentro de uma constante
const obj3 = new Obj('Mesa');

console.log(obj2);
console.log(obj3);  //imprime no console em forma de chave/valor

console.log(obj2.nome); //usando a notação ponto imprime o valor associado ao parametro desejado.
console.log(obj3.nome);  
obj3.exec() //só execulta a função instanciando a partir do nome/valor onde foi referenciado ex.: Obj aparece em obj2 e obj3