/**33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1,4,5,6]
let vetorString = ['2','7','8','10']
let vetorDouble = [0.5,2.6, 4.8, 9.8]
let result = vetorInteiro.concat(vetorString)
result = result.concat(vetorDouble)
console.log(result)