const produto = {};
produto.id = 'Notebook';
produto.preco = 5.999;
console.log(produto)
produto['Desconto'] = 0.40; //não usaar atributos com espaço ex: 'Desconto Legal'
console.log(produto)

const produto2 = {
    id: 'Fogão',
    preco: 1029.00,
    obj: {
        bla: 1,
        obj: {
            blabla:2
        }
    }
};

console.log(produto2);