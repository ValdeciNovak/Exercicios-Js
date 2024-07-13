/**
 * 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */


function calculaProgressaoAritmetica(a1, n, r) {
    let an = 0
    let termosAritimeticos = []
    for (let i = 1; i <= n; i++) {
        an = a1 + (i - 1) * r
        termosAritimeticos[i - 1] = an
    }
    let Sn = n / 2 * (2 * a1 + (n - 1) * r)

    console.log("termos Aritimeticos:", termosAritimeticos.join(", "), "Sn:", Sn)
}

function calculaProgressaoGeometrica(n, a1, q) {

    an = a1 * Math.pow(q, n - 1)
    for (let i = 0; i < n; i++) {
        console.log(a1 * (Math.pow(q, i)))
    }
    let Sn
    if (q !== 1) {
        Sn = a1 * (Math.pow(q, n) - 1) / (q - 1)
    }
    console.log("termos Geometricos Sn:", Sn)
}


calculaProgressaoGeometrica(10, 5, 3)
calculaProgressaoAritmetica(10, 10, 15)