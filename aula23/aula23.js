"use strict"
let valorPadrão = 0

function soma(...valores){
    let res = 0
    for(let elements of valores){
        res += elements
    }
    return res
}

console.log(soma(15, 15, 30, 45, 78, 94, 68))