"use strict"

let player1 = {
    nome: "Guilherme",
    sobrenome: "Souza",
    data_de_nascimento: "08082008",
    nickname: "giryrumo",
    energia: 100,
    vidas: 3,
    magia: "level 9"
}

let player2 = {
    nome: "João",
    sobrenome: "do pé de feijão",
    data_de_nascimento: "08082008",
    nickname: "20tecomer",
    energia: 50,
    vidas: 1,
    velocidade: 350
}

let player3 = {
    ...player1,
    ...player2
}

console.log("\n-=-=-=-=-=-=-=-=-=-= Spread -=-=-=-=-=-=-=-=-=-=\n")
console.log("-º-º-º-º-º-º-º-º-º-º- ... -º-º-º-º-º-º-º-º-º-º-\n")
console.log("O operador Spread(...) funciona muito bem para copiar outros elementos desde que sejam do mesmo tipo:")
console.log(`Player 1 ${player1.nickname}: Vidas ${player1.vidas}, Energia ${player1.energia}`)
console.log(`Player 2 ${player2.nickname}: Vidas ${player2.vidas}, Energia ${player2.energia}\n`)
console.log(`Caso eu queira copiar as propriedades de ${player1.nickname} só preciso declarar com "..." antes: Player 1 ${player3.nickname}: Vidas ${player3.vidas}, Energia ${player3.energia}, Magia ${player3.magia}, Velocidade ${player3.velocidade}`)