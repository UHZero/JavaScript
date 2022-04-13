function rand( { min = 0, max = 1000 } ){
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

obj = { max: 150, min: 100 };
console.log(rand(obj)); //gerador de numero randomico chamando a patir de um obj
console.log(rand({ max: 50, min:40 })); //gerador de numero randomico a partir da função
console.log(rand({ min: 950 }));
console.log(rand({}));