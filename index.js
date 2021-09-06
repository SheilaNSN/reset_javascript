function mesmoNome(nomeFulano, nomeBeltrano) {
    return nomeFulano == nomeBeltrano
}

function maiorDeIdade(idade) {
    return idade >= 18
}

function valorComJuros(valorBoleto) {
    return valorBoleto * 1.1
}

function mediaAritmetica(itens) {
    soma = 0
    for (i = 0; i < itens.length; i++) {
        soma += itens[i]
    }
    return soma / itens.length
}

function margemBruta(receitaLiquidaVendas, custoProdutosVendidos) {
    lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
    return (lucroBruto / receitaLiquidaVendas) * 100
}

function imprimir(conteudo) {
    console.log(conteudo)
}

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
