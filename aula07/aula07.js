"use strict"
console.log("\n-=-=-=-=-=-= Operadores Lógicos -=-=-=-=-=-=\n")
console.log("->->->->->->->-> && || ! <-<-<-<-<-<-<-<-\n")
console.log("Esse é o operador lógico AND -> &&")
console.log("Para têr como resultado TRUE ele precisa que TODOS os valores dentro dele sejam TRUE\n")

console.log("Esse é o operador lógico OR -> ||")
console.log("Para têr como resultado TRUE ele precisa que UM dos valores dentro dele sejam TRUE\n")

console.log("Esse é o operador lógico NOT -> !")
console.log("Ele inverte o resultado de qualquer operação em JavaScript: !(1 + 1 == 2) -> false\n")

console.log("\n=-=-=-=-=-=- Exemplos =-=-=-=-=-=-\n")

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log("->->->->->->->-> Operador &&(AND) <-<-<-<-<-<-<-<-")
console.log(`${n1} > ${n2} && ${n1} > ${n3}: ${(n1 > n2)&&(n1 > n3)}`)
console.log(`${n1} > ${n2} && ${n1} > ${n4}: ${(n1 > n2)&&(n1 > n4)}\n`)

console.log("->->->->->->->-> Operador ||(OR) <-<-<-<-<-<-<-<-")
console.log(`${n1} > ${n2} || ${n1} > ${n3}: ${(n1 > n2)||(n1 > n3)}`)
console.log(`${n1} > ${n2} || ${n1} > ${n4}: ${(n1 > n2)||(n1 > n4)}\n`)

console.log("->->->->->->->-> Operador !(NOT) <-<-<-<-<-<-<-<-")
console.log(`!(${n1} > ${n2} && ${n1} > ${n3}): ${!((n1 > n2)&&(n1 > n3))}`)
console.log(`!(${n1} > ${n2} || ${n1} > ${n4}): ${!((n1 > n2)||(n1 > n4))}\n`)

console.log(`*/*/*/*/*/*/*/*/ Em condicionais */*/*/*/*/*/*/*/`)
if(n1 > n2 && n3 > n4){
    console.log(`${n1} > ${n2} && ${n3} > ${n4} -> Verdadeiro`)
} else {
    console.log(`${n1} > ${n2} && ${n3} > ${n4} -> Falso`)
}

if(n1 > n2 || n3 > n4){
    console.log(`${n1} > ${n2} || ${n3} > ${n4} -> Verdadeiro`)
} else {
    console.log(`${n1} > ${n2} || ${n3} > ${n4} -> Falso`)
}

if(!(n1 > n2 && n3 > n4)){
    console.log(`!(${n1} > ${n4} && ${n2} > ${n3} -> Falso) -> Verdadeiro`)
} else {
    console.log(`!(${n1} > ${n4} && ${n2} > ${n3} -> Verdadeiro) -> Falso\n`)
}