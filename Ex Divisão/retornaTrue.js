/**
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e
 *  retorne true ou false
 */



function divisível(num){
    
    if(num%3==0 ){
        return true
    }else if(Number.isInteger(num)==false){
        return "Digite um numero Interiro"
    }
    else{
        return false
    }

}
console.log(divisível(8))