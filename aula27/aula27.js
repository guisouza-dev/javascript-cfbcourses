"use strict"
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}\n`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Guilherme').value)
console.log(itp.next('Futebol').value)

function* contador(){
    let counter = 0
    while(true){
        yield counter++
        if(counter > 5){
            break
        }
    }
}
const itc = contador()
for (let count of itc){
    console.log(count)
}