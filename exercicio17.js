/**17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function funcionario(salario, plano){
    switch(plano){
        case 'A':
            salario = salario + (salario * 10 / 100)
            console.log(`${salario}`)
            break
            case 'B':
            salario = salario + (salario * 15 / 100)
            console.log(`${salario}`)
            break
            case 'C':
            salario = salario + (salario * 20 / 100)
            console.log(`${salario}`)
            break
            default :
            console.log('plano invalido')
    }
}

funcionario(1000,'A')
funcionario(1000,'B')
funcionario(1000,'C')
funcionario(1000,'D')