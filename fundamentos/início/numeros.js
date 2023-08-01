const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //comando para saber se o número é inteiro (1.0 é considerado inteiro)
console.log(Number.isInteger(peso2))

let avaliacao1 = 9.5
let avaliacao2 = 6.0

let total = avaliacao1 + avaliacao2
let media = total / 2

console.log(media)
console.log(media.toString(2))
console.log(typeof media)