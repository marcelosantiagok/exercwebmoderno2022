/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const vet = [0,1,2,4,6,8,9,11,24,25,54,60,61,78,98]
let contImpar = 0
let contPar = 0
for(let i=0;i<vet.length;i++){
    if(vet[i]%2==0){
        contPar++
    }else{
        contImpar++
    }
}

console.log(`Quantidade de pares ${contPar}`)
console.log(`Quantidade de impares ${contImpar}`)