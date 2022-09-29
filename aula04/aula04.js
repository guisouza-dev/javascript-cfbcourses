"use strict"

let num1 = 0, num2 = 0, res = 0

num1 = 2
num2 = 15
res = num2 % num1

console.log(`${num2} : ${num1} => ${num2 / num1}, o quociente da divisão é ${res}`)
console.log(`O incremento de ${num1} é ${++num1}`)
console.log(`O decremento de ${num1} é ${--num1}`)
console.log(`O operador += é semelhante ao ++, a diferença é que esse o permite que some a variável mais qualquer número como por exemplo ${num1} += 15 = ${num1 += 15}`)
console.log(`Além de somar ou subtrair também posso multiplicar,, dividir, etc...`)
console.log(`${num1} *= 5 = ${num1 *= 5}`)
console.log(`${num1} /= 5 = ${num1 /= 5}`)