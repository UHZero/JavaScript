function tratarErroELancar(erro) {
    //throw new Error('este é um erro comum #555');
    //throw 555
    //throw true
    //throw 'mensagem'
    throw {
        mensagem: erre.name,
        id: erre.id,
        date: new Date
    }
}

const erre = { name: 'log - error', id: 555 }

function imprimirUpperCase(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
} //catch captura o erro, throw lança o erro

const obj = { nome: 'Roberto' }; //em fuction está em ingles
imprimirUpperCase(obj);

//const erro = { name: 'Erro', id: '555' }