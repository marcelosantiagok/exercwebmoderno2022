/**12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(valor) {
    let fat = 1
    for(let i=valor;i>0;i--){
        fat = fat * i
    }
    return fat
}

console.log(fatorial(4))