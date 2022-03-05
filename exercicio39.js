/**39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocaVetor(vetA,vetB){
    let vetorTroca = []
    for(let i=0;i<vetB.length;i++){
        vetorTroca[i] = vetB[i]
    }
    for(let i=0;i<vetB.length;i++){
        vetB[i] = vetA[i]
    }
    for(let i=0;i<vetorTroca.length;i++){
        vetA[i] = vetorTroca[i]
    }
}

vetA = [0,1,2,3,4,5]
vetB = [6,7,8,9,10,11]

trocaVetor(vetA,vetB)
console.log(vetA)
console.log(vetB)