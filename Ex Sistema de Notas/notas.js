/**
 * 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá
40 e o aluno será aprovado.

 */
/*
let notas = 81
let teste;
function arredonda(){
    console.log("notas 81 = /10",(Math.ceil(notas/10)*10)-notas)
teste=(Math.ceil(notas/10)*10)-notas
    if(teste==7 ||teste ==6){
        notas+= teste-5
    }
    if(teste==2 ||teste ==1){
        notas+= teste
    }
    //notas= Math.ceil(notas/10)
    console.log(notas)
}*/
let notasParaArredondamento = [44, 55, 33, 77, 88, 99, 67, 55, 66, 67, 88]

function arredonda(notas) {

    notas.forEach((e, i) => {

        if (e > 40) {
            aux = (Math.ceil(e / 10) * 10) - e
            if (aux == 7 || aux == 6) {
                notas[i] += aux - 5
            }
            if (aux == 2 || aux == 1) {
                notas[i] += aux
            }

        }
        console.log(notas[i])
    });
}
arredonda(notasParaArredondamento)