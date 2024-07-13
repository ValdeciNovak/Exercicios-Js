/**7
 * 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */
let alunos = [
    { codigo: 1, notas: [10, 4, 2] },
    { codigo: 2, notas: [8, 2, 2] },
    { codigo: 3, notas: [10, 4, 3] },
    { codigo: 4, notas: [4, 3, 4] },
    { codigo: 5, notas: [5, 5, 5] },
]

function calculaNota(codigoAluno, notasAlunos) {
    notasAlunos.sort()
    console.log(codigoAluno, notasAlunos)
    let mediaFinal = 0
    for (let i = 0; i < notasAlunos.length; i++) {
        if (i == notasAlunos.length - 1) {
            mediaFinal += notasAlunos[i] * 4
        } else {
            mediaFinal += notasAlunos[i] * 3
        }

    }

    return mediaFinal / 10 >= 5 ? "APROVADO" : "REPROVADO"
}


alunos.forEach(e => {
    //console.log(e.codigo, e.notas)
    if (e.codigo > 0) {
        console.log("Situação: ",calculaNota(e.codigo, e.notas))
    }
    else {
        return false
    }
});


//console.log(calculaNota(alunos[1], alunos.notas))