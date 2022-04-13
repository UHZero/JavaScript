function calcNota(nota) {
    if(nota >= 7) {
        console.log('Aprovado - nota: ' + nota)
    } else {
        console.log('Reprovado - nota: ' + nota)
    }
}

calcNota(5)

function imprimirSeVerdade(valor) {
    if(valor) {
        console.log('É verdadeiro - ' + valor)
    } else {
        console.log('É falso - ' + valor)
    }
}

imprimirSeVerdade();
imprimirSeVerdade(null);
imprimirSeVerdade(undefined);
imprimirSeVerdade('');
imprimirSeVerdade(0);
imprimirSeVerdade(NaN);
imprimirSeVerdade('aureo');
imprimirSeVerdade(666);
imprimirSeVerdade(' ');
imprimirSeVerdade('?');
imprimirSeVerdade([]);
imprimirSeVerdade([1, 2]);
imprimirSeVerdade({});