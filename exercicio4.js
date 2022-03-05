// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const divisao = function(dividendo, divisor){
    console.log(`Resultado da divisao entre ${dividendo} / ${divisor} = ${dividendo/divisor}`)
    console.log(`O Resto da divisao é = ${dividendo % divisor}`)
}

divisao(4,2)