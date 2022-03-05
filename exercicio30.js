/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/


const vet = [0, 1, 2, 4, 6, 8, 9, 11, 24, 25, 54, 60, 61, 78, 98]


let maior = vet[0]
let menor = vet[0]

function percorraVetor(vet) {
    for(let i =0;i<vet.length;i++){
        if(vet[i]>maior){
            maior = vet[i]
        }
        if(vet[i]<menor){
            menor = vet[i]
        }
    }
}

percorraVetor(vet)
console.log(`Maior = ${maior}`)
console.log(`Menor = ${menor}`)
