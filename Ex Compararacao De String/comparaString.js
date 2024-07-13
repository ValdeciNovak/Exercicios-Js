/**
 * 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False 
 * caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas 
 * palavras.
 */
function ordenaString(String){
    return String.split("").sort().join("")
}

function comparaString(palavra) {
    let novaString = []

    for (let i = 0; i < palavra.length; i++) {

        if (novaString.includes(palavra[i])==false) {
        
            novaString += palavra[i]
        
        }
    }
    
    return ordenaString(novaString)
    
}

function verificaIgualdade(string1, string2){

    if(string1==string2){
        return true
    }
    else{
        return false
    }

}

(function(){
    let palavra1 = []
    let palavra2 = []
    palavra1 = comparaString("teste")
    palavra2 =comparaString("este");

    console.log(verificaIgualdade(palavra1,palavra2))

})()

