//objeto = {}
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4000
prod1['Desconto do produto'] = 0.4 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 80.00,
    desconto: {
        umaCamisa: 0.2,
        maisDeDuas: 0.4
    }
}
console.log(prod2)

//'{"nome": "Camisa Polo", "preco": 80.00} --> JSON