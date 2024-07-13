/**
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

let vetor = [1, 8, 3, 4, 5]

function multiplicacao(vetor, num) {

    resultadoMulti = []
    let index=0
    vetor.forEach(e => {
        resultadoMulti[index] = e * num
        index++
    });
    return resultadoMulti
}

function multiplicacaoMaiorQueCinco(vetor, num) {

    resultadoMulti = []
    let index=0
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]>5){ 
            resultadoMulti[index] = vetor[i] * num
            index++
        }
        }
        return resultadoMulti
}

console.log("Multiplicação de vetor inteiro:",multiplicacao(vetor, 5))
console.log("Multiplicação valor maior que 5: ",multiplicacaoMaiorQueCinco(vetor, 5))