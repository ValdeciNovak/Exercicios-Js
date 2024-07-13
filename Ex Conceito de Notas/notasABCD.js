/**
 * 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 
o conceito B e de 9,0 a 10,0 o conceito A.
 */

function classificaNotas(notas) {

    notas.forEach(e => {
        if (e > 10 || e < 0) {
            console.log("nota:", e, "é inválida")
        } else {
            if (e < 4.9) {

                console.log("nota =", e, "conteito: D")
            }
            else if (e < 6.9) {
                console.log("nota =", e, "conteito: C")
            }
            else if (e < 8.9) {
                console.log("nota =", e, "conteito: B")
            }
            else if (e <= 10) {
                console.log("nota =", e, "conteito: A")
            }
        }
    });

}

let notasParaClassificar = [1, 2, 4, 5, 6, 7, 9, 9, 8, 7, 3, 8, 10, 11, -1]
classificaNotas(notasParaClassificar)