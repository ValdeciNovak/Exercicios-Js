/**
 * 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function calculaJuros(mesDePagamento, valorMes,taxa){

    mesDePagamento-= 1
    valorASerPago = valorMes*Math.pow(1+(taxa/100), mesDePagamento)
    return valorASerPago.toFixed(2)
}
console.log("O valor a ser pago é:", calculaJuros(11,400,5))