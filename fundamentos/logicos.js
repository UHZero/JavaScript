function freeLancer (trabalho1, trabalho2) {
    const Mercado = trabalho1 || trabalho2;
    const Cinema = trabalho1 && trabalho2;
    const Netflix = trabalho1 != trabalho2;
    //const Netflix = !!(trabalho1 ^ trabalho2) //bitwise xor
    const tryAgain = !Mercado; //operador unário
    return { Mercado, Cinema, Netflix, tryAgain};
}

console.log(freeLancer(true, true));
console.log(freeLancer(true, false));
console.log(freeLancer(false, true));
console.log(freeLancer(false, false));