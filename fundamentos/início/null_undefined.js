let valor //não inicializada --> undefined
console.log(valor)

valor = null //ausencia de valor
//está inicializada
console.log(valor)
//console.log(valor.toString()) --> o nulo nao faz referencia a nada (ERRO!)
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.00
console.log(produto)

produto.preco = undefined //EVITAR
console.log(produto.preco)
console.log(produto)

produto.preco = null //"reseta" a variavel
console.log(produto)