/**40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */
let notas = [4.4, 5.6, 7.7, 9.9]
function conceito(vetNota) {
    for (let i = 0; i < vetNota.lenght; i++) {
        if ((vetNota[i] > 0.0) && (vetNota[i] < 4.9)) {
            console.log('Conceito D')
        } else if ((vetNota[i] > 5.0) && (vetNota[i] < 6.9)) {
            console.log('Conceito C')
        } else if ((vetNota[i] > 7.0) && (vetNota[i] < 8.9)) {
            console.log('Conceito B')
        } else {
            console.log('Conceito A')
        }
    }
}

conceito(notas)

/**/