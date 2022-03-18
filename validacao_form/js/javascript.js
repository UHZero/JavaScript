const bhaskara = function (ax2, bx, c) {
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return 'Delta é negativo!'
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}

let resultadoBhaskara;

const aprovacao = function () {
    console.log(bhaskara)
}

/* 
 * Formulário envio de dados para cálculo da média 
 */
document.getElementById('formulario-01').addEventListener('submit', function (evento){
    evento.preventDefault();
    evento.stopPropagation();

    if (this.getAttribute('class').match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);

    let bhaskara = [];

    for (let key of dados.keys()) {
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;

        if (!isNaN(numero)) {
            bhaskara.push(numero);
        }

    }

    console.log(bhaskara)

    texto = aprovacao(bhaskara)

    document.getElementById('resultado').innerHTML = texto;

})