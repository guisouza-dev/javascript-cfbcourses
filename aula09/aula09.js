"use strict"
let n = 10

console.log("\n-=-=-=-=-=-=-=-=-=-= Pós e Pré Incremento -=-=-=-=-=-=-=-=-=-=\n")
console.log("******************** Pré Incremento ********************")
console.log(`Quando colocamos o incremento antes de usar o valor o resultado já sai incrementado: ++${n} -> ${++n}`)
console.log(`--${n} -> ${--n}\n`)
console.log("******************** Pós Incremento ********************")
console.log(`Quando colocamos o incremento depois de usar o valor o resultado não sai incrementado: ${n}++ -> ${n++}`)
console.log(`${n}-- -> ${n--}\n`)

console.log("Muitos não consideram, mas o - também é um operador e esse, inverte o valor quando for Number: x=10, y=-x -> y == -10")
console.log("x=-10, y=-x -> y == 10\n")