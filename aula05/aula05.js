"use strict"
let num1 = 10, num2 = 5, num3 = 10

console.log("\n======== Operadores Relacionais ========\n")
console.log("----------- > < >= <= == != -----------")

console.log("\n******* Maior ou Menor? ********\n")
console.log(`O operador ">" verifica se um valor é maior que o outro, como por exemplo: ${num1} > ${num2} --> ${num1 > num2}`)
console.log(`Já o operador "<" verifica se um valor é menor que o outro, como por exemplo: ${num1} < ${num2} --> ${num1 < num2}`)

console.log("\n******** Maior ou igual, Menor ou igual ********\n")
console.log(`O operador ">=" verifica se um valor é maior ou igual à outro, como por exemplo: ${num1} >= ${num2} --> ${num1 >= num2}`)
console.log(`O operador "<=" verifica se um valor é menor ou igual à outro, como exemplo: ${num1} <= ${num2} --> ${num1 <= num2}`)

console.log("\n******** Igual ou diferente? ********\n")
console.log(`O operador "==" verifica se um valor é igual à outro, como exemplo: ${num1} == ${num3} --> ${num1 == num3}`)
console.log(`Já o operador "!=" verifica se um valor é diferente à outro, como exemplo: ${num1} != ${num3} --> ${num1 != num3}`)
console.log(`Também existe a negação que inverte o resultado da verificação, !expressão, vamos usar em uma verificação real: ${num1} != ${num3} --> ${!num1 != num3}\n`)