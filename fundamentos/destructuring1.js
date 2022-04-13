// novo recurso do ES2015

const person = {
    name: 'NoName',
    age: 0,
    mail: {
        street: 'lost street',
        number: 666
    }
}

//console.log(person.age)
//console.log(person.mail.number) //acessando uma informação com a notação ponto

const { name, age } = person;
console.log(name, age); // acessando varias informações usando o recurso destructuring

const { name: n, age: a } = person; //atribui uma variavel á um atributo
console.log(n, a);

const { nickname, status = true } = person;
console.log(nickname, status); //retorna true para status pois assume o valor dado, e undefined para nickname pois a variavel não foi tocada

const { mail: { street, number, email } } = person; //acessar  atributos de forma aninhada
console.log(street, number, email); //para acessar um dado aninhado tenha certeza que o caminho de fato está setado