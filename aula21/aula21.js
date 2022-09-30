"use strict"
function canal(){
    let n1 = 15
    let n2 = 3
    let res = n1 * n2
    if(res % 2)
        return `${res} é ímpar`
     else
        return `${res} é par`   
}
let num = canal()
console.log(num)