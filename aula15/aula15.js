"use strict"
let par = 0
let ímpar = 0
for(let cont = 0; cont < 200; cont++){
    if(cont % 2){
        console.log(`${cont} é ímpar`)
        ímpar++
    } else {
        console.log(`${cont} é par`)
        par++
    }
}
console.log(`De 0 a 200 há ${par} números pares e ${ímpar} ímpares`)