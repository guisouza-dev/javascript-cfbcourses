"use strict"
let num = [10, 20, 30, 40, 50]
let num2 = [...num]
const objs = document.getElementsByTagName('div')
for(let element in num){ //Melhor para pegar a posição de um elemento de array
    console.log(num[element])
}

console.log("\n")

for(let ob3 = 0; ob3 < objs.length; ob3++){
    console.log(objs[ob3])
}

for(let element of num2){ //Melhor para pegar os elementos de uma array
    console.log(element)
}

for(let o of objs){
    console.log(o.innerHTML = 'Alterei via JS')
}

for(let o2 in objs){
    console.log(objs[o2].innerHTML)
}