/**22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function aPagarAssociacao(mes) {
    let taxaJuros = 0.05
    let valor = 100
    let calc = valor * Math.pow((1 + taxaJuros), mes - 1);
    return calc.toFixed(2);
}

//formula montante * math.pow((1+taxaJuros),mes-1)


console.log(aPagarAssociacao(1))
console.log(aPagarAssociacao(2))
console.log(aPagarAssociacao(3))