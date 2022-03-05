/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const vet = [0, 1, 2, 4, 6, 8, 9, 11, 24, 25, 54, 60, 61, 78, 98, -2, -4, -1, -40, -28, -32]

let negativos = 0
function qtdNroNegativos(vet){
    for(let i=0;i<vet.length;i++){
        if(vet[i]<0){
            negativos++
        }
    }
}

qtdNroNegativos(vet)
console.log(`Quantidade de numeros negativos do vetor = ${negativos}`)