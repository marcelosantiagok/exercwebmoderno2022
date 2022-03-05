/**23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function aluno(codigo, nota1, nota2, nota3) {
    let media = 0
    if (nota1 > nota2 && nota1 > nota3) {
        media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    } else if (nota2 > nota1 && nota2 > nota3) {
        media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
    } else {
        media = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10
    }

    let resultado = ' '
    if (media >= 5) {
        resultado = 'Aprovado'
    } else {
        resultado = 'Reprovado'
    }

    console.log(`Código do aluno: ${codigo}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media}\nResultado: ${resultado}`);
}


aluno(100, 5, 5, 5)
aluno(100, 4, 5, 5)
aluno(100, 4, 5, 6)