/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.

 */


function fatorial(num){
    cont = num
    for(let i = num-(num-1);i<num;i++){
        cont*=i
    }
    return cont
}

console.log("O fatorial é",fatorial(4))
