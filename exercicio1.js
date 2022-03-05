// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const resultadoOperacao = function(x,y){
    console.log(`soma de ${x} + ${y} = ${x+y}`)
    console.log(`subtracao de ${x} - ${y} = ${x-y}`)
    console.log(`multiplicacao de ${x} * ${y} = ${x*y}`)
    console.log(`divisao de ${x} / ${y} = ${x/y}`)
}

resultadoOperacao(10,2)