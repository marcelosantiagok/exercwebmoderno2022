/**34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function retTrueOrFalse(string1, string2) {
    console.log(string1.toUpperCase() == string2.toUpperCase())
}
retTrueOrFalse('alo','Alo')