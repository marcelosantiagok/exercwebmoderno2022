/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/
let int10e20 = 0
let fora = 0

const vet = [0, 1, 2, 4, 6, 8, 9, 11, 24, 25, 54, 60, 61, 78, 98]

function percorraVetor(vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 9 && vet[i] < 21) {
            int10e20++
        } else {
            fora++
        }
    }

}

percorraVetor(vet)

console.log(`Estao no intervalo entre 10, 20 qtd = ${int10e20}`)
console.log(`Estao fora do intervalo qtd = ${fora}`)