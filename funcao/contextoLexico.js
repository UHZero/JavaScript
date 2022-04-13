const valor = 'Hello World!(Global)'

function minhaFuncao () {
    console.log(valor)
}

function exec () {
    const valor = 'Hello World (Local)'
    minhaFuncao()
    //console.log(valor)
}

exec()