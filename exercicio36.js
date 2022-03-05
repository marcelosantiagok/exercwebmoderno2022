/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/


function vet1(vet,num){
    let result = []
    for(let i=0;i<vet.length;i++){
        result[i] = vet[i] * num
    }
    return result
}

let vetor = [1,2,3,4,6,7]

console.log(vet1(vetor,4))

function vet2(vet,num){
    let result = []
    for(let i=0;i<vet.length;i++){
        if(vet[i]>5){
            result[i] = vet[i] * num
        }
        
    }
    return result
}

console.log(vet2(vetor,4))