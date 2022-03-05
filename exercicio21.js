/** 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function valorApagar(idade){
    let result = 0
    let planoGeral = 100
    let plano61 = 130
    let plano60 = 95
    let plano29 = 50
    let plano9 = 80
    if(idade > 0 && idade<=9){
        result = planoGeral + plano9
    }else if(idade>9 && idade<=29){
        result = planoGeral + plano29
    }else if(idade>29 && idade<=60){
        result = planoGeral + plano60
    }else if(idade>60){
        result = planoGeral + plano61
    }
    console.log(result)
}

valorApagar(61)
valorApagar(60)
valorApagar(29)
valorApagar(9)