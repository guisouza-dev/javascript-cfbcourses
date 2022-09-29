"use strict"
let v1 = 10, v2 = "10", v3 = v1 === v2, v4 = {
    nome: "Guilherme",
    sobrenome: "de Souza"
}
console.log("\n-=-=-=-=-=-=-=-=-=-= Typeof -=-=-=-=-=-=-=-=-=-=\n")
console.log("Para verificar o tipo de alguma variável, usamos o operador typeof(), ele verifica o valor da variável e retorna o tipo. Exemplos abaixo:")
console.log(`let v1 = 10 -> ${typeof(v1)}`)
console.log(`let v2 = "10" -> ${typeof(v2)}`)
console.log(`let v3 = v1 == v2 -> ${typeof(v3)}`)
console.log(`let v4 = {nome: "Guilherme", sobrenome: "de Souza"} -> ${typeof(v4)}`)