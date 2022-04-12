const resultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario-01');
const botao = document.querySelector('.button');

botao.addEventListener('click', e =>{
    e.preventDefault();
    const recebeA = form.querySelector('.insiraA');
    const recebeB = form.querySelector('.insiraB');
    const recebeC = form.querySelector('.insiraC');

    let variavelA = Number(recebeA.value);
    let variavelB = Number(recebeB.value);
    let variavelC = Number(recebeC.value);

    const bhaskara = function (a,b,c) {
            let delta = (b ** 2) - (4 * a * c)
            if (delta < 0) {
                    return 'Delta é negativo!'
            }
            let x1 = (-b + Math.sqrt(delta)) / (2 * a)
            let x2 = (-b - Math.sqrt(delta)) / (2 *a)
            const resultado = [];
            resultado.push(x1)
            resultado.push(x2)
            return resultado
            
    }
    let tarefa = bhaskara(variavelA,variavelB,variavelC)
    document.getElementById('resultado').innerHTML = tarefa;
})