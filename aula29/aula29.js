function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dadosAnĂ´nimos = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2500)
    }
    
    this.dadosArrow = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2500)
    }
        
}
const aluno1 = new aluno('Guilherme', 10)
aluno1.dadosAnĂ´nimos()
aluno1.dadosArrow()