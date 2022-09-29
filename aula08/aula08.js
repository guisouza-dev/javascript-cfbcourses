"use strict"
let n1 = 10, n2 = 4
let res = n1 & n2

function revelarBit (number){
    let num = number
    let binário = (num % 2).toString()
    for(; num > 1;){
        num = parseInt(num / 2)
        binário = (num % 2) + (binário)
    }
    return binário
}
console.log("\n-=-=-=-=-=-= Operadores Bitwise em JavaScript -=-=-=-=-=-=\n")
console.log("*********** & | ^ << >> ************\n")
console.log(`O operador & converte os valores em binário e retorna apenas os bits "1" EQUIVALENTES: ${revelarBit(n1)} & ${revelarBit(n2)} -> ${n1 & n2}\n`)

console.log(`O operador | converte os valores em binário e retorna os bits "1": ${revelarBit(n1)} | ${revelarBit(n2)} -> ${n1 | n2}\n`)

console.log(`O operador ^ converte os valores em binário e retorna apenas os bits "1" NÃO equivalentes convertidos em não-binário: ${revelarBit(n1)} ^ ${revelarBit(n2)} -> ${n1 ^ n2}\n`)

console.log(`O operador << + (quantidade de bits a serem deslocados) desloca um ou mais bits para esquerda: ${revelarBit(n1)} << 1 == ${n1 << 1}(${revelarBit(n1 << 1)})`)
console.log(`O operador >> + (quantidade de bits a serem deslocados) desloca um ou mais bits para direita: ${revelarBit(n2)} >> 1 == ${n2 >> 1}(${revelarBit(n2 >> 1)})`)