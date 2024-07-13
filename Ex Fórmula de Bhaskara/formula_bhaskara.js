/**Sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente:
3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a 
frase: “Delta é negativo”.
 */

function deltaZero(a, b) {

    return (-(b)) / (2 * a);

}

function deltaMaior(a, b, delta) {
    let x = []

    x[0] = (-b + Math.sqrt(delta)) / (2 * a)
    x[1] = (-b - Math.sqrt(delta)) / (2 * a)

    return x
}


function bhaskara(ax2, bx, c) {

    let delta = Math.pow(bx, 2) - 4 * ax2 * c
    if (delta < 0) {
        return ("Delta e negativo")
    }
    else if (delta == 0) {
        return (deltaZero(ax2, bx));
    }
    else {
        return (deltaMaior(ax2, bx, delta))

    }
}

console.log(bhaskara(1, -4, 3));
