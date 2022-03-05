/**19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function pedido(codigo, quantidade) {
    let calc = 0;
    switch (codigo) {
        case 100:
            calc = 3.00
            break
        case 200:
            calc = 4.00
            break
        case 300:
            calc = 5.50
            break
        case 400:
            calc = 7.50
            break
        case 500:
            calc = 3.50
            break
        case 600:
            calc = 2.80
            break
        default:
            calc = 0
    }
    if(calc>0){
        calc = calc + quantidade
        console.log(`Valor total a pagar e  R$ ${calc.toFixed(2)}`)
    }else{
        console.log('Produto inexistente')
    }
    
}

pedido(100,3)
pedido(200,4)
pedido(300,5)
pedido(400,2)
pedido(500,4)
pedido(600,7)
pedido(800,2)