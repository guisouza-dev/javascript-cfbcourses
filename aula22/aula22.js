"use strict"
const valorPadrão = 0
let valor = 355
console.log(valor)

function add(value){
    valor += value
}
add(659)
console.log(valor)

add(783)
console.log(valor)

function soma(n1 = valorPadrão, n2 = valorPadrão){
    let res = n1 + n2
    return res
}
let resultado = soma(5)
// console.log(soma(resultado))