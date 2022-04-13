console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //1° de Janeiro de 1970 - Padrão de diversas linguagens;
const d2 = new Date(0)
console.log('09)', d1 === d2) //como usa a referencia guardada na memória o resultado é false
console.log('10)', d1 == d2) //idem
console.log('11)', d1.getTime() === d2.getTime()) //usa o relógio ou "tempo relacional" como referência, então o resultado é true

console.log('12)', undefined == null) //por comparar sem tipagem é true
console.log('13)', undefined === null) //usando tipagem é false

// sempre usar === para não ter erros entre tipos;