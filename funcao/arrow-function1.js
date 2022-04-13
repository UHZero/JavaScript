let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a //return está implicito

console.log(dobro(5))
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parametro
console.log(ola())