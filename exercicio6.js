// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
// 07)


const funJurosSimples = function(capital, taxaJuros, tempo){
    taxaJuros = taxaJuros/100
    return capital + (capital * taxaJuros * tempo)

}

console.log(funJurosSimples(500,3,8))

// https://mundoeducacao.uol.com.br/matematica/aplicacao-juros-simples.htm
// https://www.arquivodecodigos.com.br/dicas/1177-javascript-calculando-juros-simples-e-montante-usando-javascript.html


const funJurosCompostos = function(capital, taxaJuros, tempo){
    return capital * Math.pow((1 + taxaJuros),tempo)
}

console.log(funJurosCompostos(1400,0.07,2).toFixed(2))

// https://brasilescola.uol.com.br/matematica/juros-compostos.htm