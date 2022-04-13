const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

console.log(produtos.filter(function(p) {
    return p.fragil == false
}))

 const filtra500 = (e) => e.preco >= 500;
 const fragilTrue = (e) => e.fragil;

 const resultado = produtos.filter(filtra500).filter(fragilTrue)
 console.log(resultado)