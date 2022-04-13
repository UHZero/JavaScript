// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'PermitidoTrocarValor';
produto.descricao = 'naoAceitaNovasExtensoes';
console.log(produto);
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = {
    nome: 'QueNomeColoco',
    idade: 39
}
Object.seal(pessoa); // não é possível adicionar nem excluir attr, porem é permitido trocar valor dos attr ja existentes
console.log('Selado:', Object.isSealed(pessoa));
pessoa.nome = 'PermitidoTrocarValorDoAttr';
pessoa.sobrenome = 'impossivelAddNovosAttr';
delete pessoa.idade;
console.log(pessoa);

// Object.freeze = selado + valores constantes