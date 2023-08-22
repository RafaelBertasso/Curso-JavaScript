//armazenar funcao em uma variavel
//funcao anononima = funcao sem nome
const imprimir_soma = function (a,b) {
    console.log(a+b)
}
imprimir_soma(2,3)

//armazenar uma funcao arrow em uma variavel
//tipo nomeFuncao = (parametros) => {}
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))

//retorno implicito
//tipo nomeFuncao = (parametros) => retorno
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))

//com um unico parametro
const imprimir2 = a => console.log(a)
imprimir2('Legal')