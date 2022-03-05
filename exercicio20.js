/**20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function informeNotas(nota) {
    let valor = nota
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0
    while (valor > 0) {
        if (valor >= 100) {
            cont100++
            valor = valor - 100
        } else if (valor >= 50) {
            cont50++
            valor = valor - 50
        } else if (valor >= 10) {
            cont10++
            valor = valor - 10
        } else if (valor >= 5) {
            cont5++
            valor = valor - 5
        } else if (valor >= 1) {
            cont1++
            valor = valor - 1
        }
    }

    if(cont100>0){
        console.log(`${cont100 } nota(s) de R$ 100.00`)
    }
    
    if(cont50>0){
        console.log(`${cont50 } nota(s) de R$ 50.00`)
    }

    if(cont10>0){
        console.log(`${cont10 } nota(s) de R$ 10.00`)
    }
    
    if(cont5>0){
        console.log(`${cont5} nota(s) de R$ 5.00`)
    }
    
    if(cont1>0){
        console.log(`${cont1} nota(s) de R$ 1.00`)
    }
    

}

   informeNotas(18)