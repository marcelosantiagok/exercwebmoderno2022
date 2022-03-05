/**10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function eDivisivelPor3(valor){
    if(valor%3==0){
        console.log(true)
    }else{
        console.log(false)
    }
}

eDivisivelPor3(3)
eDivisivelPor3(4)
eDivisivelPor3(9)