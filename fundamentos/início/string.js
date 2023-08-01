const escola = "Cod3r"

console.log(escola.charAt(4))
//mostra qual é o caracter daquela letra

console.log(escola.charAt(5)) //não existe caracter
console.log(escola.charCodeAt(3))
//mostra o valor do caracter na tabela ASCII
console.log(escola.indexOf('r'))
//para saber o indice do caracter na palavra
console.log(escola.substring(1)) //mostra do 2° caracter ate o final
console.log(escola.substring(0,3)) //mostra do 1° caracter ate o 3°
//mostrar somente a parte da string desejada
console.log('Escola '.concat(escola).concat("!"))
//concatenar = juntar com as partes presentes no parâmetro
console.log(escola.replace(3,'e'))
//substitui o caracter desejado
console.log('Ana, Maria, Pedro'.split(','))
//cria um array(vetor) com os elementos declarados