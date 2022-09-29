"use strict"
let ranking = 45
let pódio = false

switch (ranking) {
    case 1: 
        console.log(`1º Colocado!`)
        console.log("PARABÉNS Você foi o campeão!!!💪🏆🥇")
        pódio = true
        break
    case 2:
        console.log(`2º Colocado!`)
        console.log("Parabéns você foi o vice campeão!!🥈👏")
        pódio = true
        break
    case 3:
        console.log(`3º Colocado!`)
        console.log("Parabéns você foi o terceiro colocado!!🥉👏")
        pódio = true
        break
    default:
        console.log(`Você ficou em ${ranking}º parabéns!`)
}
if (pódio === true){
    console.log("Você subiu ao pódio!")
}