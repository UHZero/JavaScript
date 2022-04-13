let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //em node objeto global é a propira palavra global, e no caso do browser é window, ou seja this === global (node), this === window (browser)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)