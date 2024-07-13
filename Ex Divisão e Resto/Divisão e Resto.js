/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores
*/

const divisao = (dividendo,divisor) =>{
    console.log(`Divisão: ${(dividendo/divisor).toFixed(2)}, Resto: ${dividendo%divisor}`)
}

divisao(40,5)