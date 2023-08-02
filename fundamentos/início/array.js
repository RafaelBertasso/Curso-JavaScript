//array = vetor
//é uma estrutura linear

const valores = [7.7, 8, 9.3, 10.6]
console.log(valores[0], valores[3]) //acessa o valor armazenado no indice([i])
console.log(valores[4]) //nao existe valor nesse indice

valores[4] = 1.4
console.log(valores)
console.log(valores.length) //mostra a quantidade de elementos no vetor
valores.push({id:3}, false, null, 'teste') //adiciona elementos no vetor
console.log(valores)
console.log(valores.pop()) //retira o ultimo elemento do vetor
delete valores[0] //deleta o valor armazenado no indice selecionado
console.log(valores)
console.log(typeof valores)