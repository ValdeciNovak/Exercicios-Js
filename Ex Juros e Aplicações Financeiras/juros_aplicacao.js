/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/


function calculaJurosSimples(capInicial, juros, tempoAplicado) {
    return (capInicial * (1 + (juros * tempoAplicado) / 100)).toFixed(2).replace(".", ",");
}

function calculaJurosComposto(capInicial, juros, tempoAplicado) {
    return (capInicial * (Math.pow((1 + (juros / 100)), 1 * tempoAplicado))).toFixed(2).replace(".", ",")
};

console.log(`O montante total de juros simples ao ano é: R$:${calculaJurosSimples(1000, 5, 2)}`)
console.log(`O montante total de juros compostos ao ano é: R$:${calculaJurosComposto(1000, 5, 2)}`);



