"use strict"
let n1 = 150, n2 = 55
let nickname = document.getElementById('nome')
let plataforma = document.getElementById('plataforma')
let curso = document.getElementById('curso')

function nome(){ //declaração da função
    console.log("CFB Cursos")
}

for(let count = 0; count < 10; count++){
    nome() //chamada da função
}

function sum(v1, v2){
    let soma = v1 + v2
    return soma
}

function mudarTexto(){
    if(nickname.innerHTML == 'Guilherme' && plataforma.innerHTML == 'CFB Cursos' && curso.innerHTML == 'JavaScript Moderno'){
        nickname.innerHTML = "Souza"
        plataforma.innerHTML = "Curso em Vídeo"
        curso.innerHTML = "HTML e CSS módulo 5"
    } else {
        nickname.innerHTML = "Guilherme"
        plataforma.innerHTML = "CFB Cursos"
        curso.innerHTML = "JavaScript Moderno"
    }
}