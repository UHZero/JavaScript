// IIFE -> Immediately Invoked Function Expression
(function() {
    console.log('Será executadoo na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

//Dentro do escopo global
console.log('Será executadoo na hora!')
console.log('Dentro do escopo abrangente(global)!')