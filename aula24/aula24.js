"use strict"
const anonimaConstrutor = new Function ("v1", "v2", "v3", "return v1 + v2") // função construtor Anônima
console.log(anonimaConstrutor(15, 16, 14))