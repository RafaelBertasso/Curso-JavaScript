const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `Ola ${nome}!`
//${nomeVar} --> chama uma função dentro de uma expressão
//tambem é possivel declarar strings usando crases(``)
console.log(concatenacao, template)
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)