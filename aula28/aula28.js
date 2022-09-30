"use strict"
const converterInt = (elemento)=> parseInt(elemento)
const dobrar = (elemento)=> elemento*2
let num = ['5', '1', '9', '8'].map(dobrar)
console.log(num)

/* const elementos = document.querySelectorAll('div')
const valores = Array.prototype.map.call(elementos, ({innerHTML})=>innerHTML)
console.log(valores)

/* let el = document.querySelectorAll("div")
el = [...el]
console.log(el)
el.map((e, i) => {
    e.innerHTML = 'Mudei via MAP em JavaScript'
})
*/



/* const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"]
 let c = cursos.map((el, i)=> {
     console.log(`Curso: ${el} - Posição do curso: ${++i}º`)
/    return el
 })
*/

