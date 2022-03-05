/**11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
12) */

function eBissexto(valor){
    if(valor%4===0 && valor%100!==0){
        console.log('é bissexto')
    }else{
        console.log('não é bissexto')
    }
}

eBissexto(2020)
eBissexto(2021)
eBissexto(2022)
eBissexto(2023)
eBissexto(2024)