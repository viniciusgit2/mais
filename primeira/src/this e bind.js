const pessoa ={
    saudaçoes:"bom dia",
    falar(){
   
     console.log(this.saudaçoes)
     
    }

}

pessoa.falar()
const falar=pessoa.falar
falar()
const falar2=pessoa.falar.bind(pessoa)