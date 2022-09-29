"use strict"
let clima = 'sol'
let energia = 100
let num = 55

function verificador(number){
    if (number > 10){
        console.log("Esse número é maior do que 10!")
        if(num > 50){
            console.log("Número maior do que 50!")
        }
    } else if(number > 5) {
        console.log("Número está entre 6 e 10!")
    } else {
        console.log("Número menor do que 6!")
    }
}

if(energia > 70 && clima.toUpperCase() === 'SOL'){
    console.log("Eu vou a praia!")
} else if(energia > 70 && clima.toUpperCase() != 'SOL'){
    console.log("Vou ao cinema!")
} else {
    console.log("Hoje eu vou ficar em casa!")
}

verificador(num)
console.log(`Fim do programa!`)