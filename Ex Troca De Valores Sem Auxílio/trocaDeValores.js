/**
 * 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
 */

let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,0]
i=0
console.log("Vetor A", vetor1, "Vetor B", vetor2)
function teste(){
    
    let tamanhoVetor = vetor1.length
    
    //vetor1.push(vetor2[2])
    while(i<tamanhoVetor){
        vetor1.push(vetor2[i])
        vetor2.push(vetor1[i])
        i++
    }
    i=0
    while(i<tamanhoVetor){
        vetor1.shift()
        vetor2.shift()  
        i++    
    }
    return vetor1, vetor2
    
}
teste(vetor1, vetor2)
console.log("Vetor A", vetor1, "Vetor B", vetor2)
