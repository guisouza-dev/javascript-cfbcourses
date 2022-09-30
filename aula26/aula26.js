"use strict"
let valores = [
    50, 45, 67, 98, 12, 34, 69, 78, 45, 89
]

const somar = valor =>{
    let res = 0
    for(let elements of valor)
        res += elements
    return res
}

const soma = (...valores)=>{
    return somar(valores)
}

console.log(soma(78, 96, 55))
console.log(somar(valores))