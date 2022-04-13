Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
           newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

console.log(produtos.filter2(function(p) {
    return p.fragil == false
}))

 const filtra500 = (e) => e.preco >= 500;
 const fragilTrue = (e) => e.fragil;

 const resultado = produtos.filter2(filtra500).filter2(fragilTrue)
 console.log(resultado)