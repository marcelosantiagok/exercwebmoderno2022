/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/


function mediaAritimetica(vet){
    let soma = 0
    let media = 0
    for(let i=0;i<vet.length;i++){
        soma = soma + vet[i]
    }
    media = soma / vet.length
    console.log(`A media = ${media.toFixed(2)}`)
}

let vet = [1,2,4,5]
mediaAritimetica(vet)