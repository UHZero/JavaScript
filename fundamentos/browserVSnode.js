let a = 3;

global.b = 321; //grava uma variavel no escopo global
this.c = .098;
this.d = false;
this.e = 'teste';

console.log(this.a); //retorna undefined por let não gravar o valor no escopo global
console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports); //o mais comum é module.exports = { f: 'string', g: true, h: .0123 } /console.log(module.exports);

//criando uma variavel sem var ou let! (NÃO FAÇA ISSO!!!)
abc = 666;
console.log('abc = ' + global.abc);