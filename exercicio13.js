/**13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function eUtil(valor){
    switch(valor){
        case 1:
        case 8:
        case 15:
        case 22:
        case 29: 
        console.log('Domingo - dia não util')
        break
        case 2:
        case 9: 
        case 16: 
        case 23: 
        case 30: 
        console.log('Segunda - dia util') 
        break
        case 3:
        case 10:
        case 17:
        case 24: 
        console.log('Terca - dia util')
        break
        case 4: 
        case 11:
        case 18:
        case 25: 
        console.log('Quarta - dia util')
        break
        case 5:
        case 12: 
        case 19: 
        case 26: 
        console.log('Quinta - dia util')
        break
        case 6:
        case 13:
        case 20:
        case 27: 
        console.log('Sexta - dia util')
        break
        case 7:
        case 14:
        case 21:
        case 28: 
        console.log('Sabado -  dia não util')
        break
        default: console.log('Dia inválido')
    }

}

eUtil(1)
eUtil(28)
eUtil(25)
eUtil(60)