/*
variaveis: espaços em memoria que armazenam valores
let = valores variaveis que recebo em meio a execução
cons = valores fixos nno codigo (valor de pi)
var = eh primeira forma de declarar uma variavel, porem hoje eh obsoleta
escopo diz respeito a como eu vou usar as variaveis criadas
quando criada uma variavel dentro de uma funçao, ela eh usada somente dentro dela.
ainda temos mais um tipo de variavel no js, o array (conjunto de dados numa mesma variavel)
*/ 

// bloco de codigo
/* usando os '[]' eu posso criar esse array, lembrando que ele é indexado, começando em '0' */

let numeros = [5,10,15,20,25,30,35,40,45,50]

//para saber os indices do array
// for(let indice in numeros){ 
//     document.write(indice)
// }

//para ver valores armazenados no indice
for(let valor of numeros){ 
    document.write(`${valor}, `)
}

//forEach eh uma manipulacao de um array
numeros.forEach(function(valor){
    document.write(`${valor} <p>`)
})

// inserir um elemento no final da lista
numeros.push(60)
document.write(`${numeros}`)

//inserir no inicio do array
numeros.shift(0)
document.write(`${numeros} <p>`)

//excluir no final do array
numeros.pop()
document.write(`${numeros} <p>`)

/*
funcao de retorno/funcao callback -> eu interajo com meu array, trato essa informação
e guardo o resultado  em uma nova variavel (array) 
MAP -> percorro todo o array, faço alguma coisa com ovalor e guardo na varivel de
retorno (funcao callack)
*/

let numerosDobrados = numeros.map(function(numero){
    return numero * 2
})
document.write(`${numerosDobrados}<p>`)

/*Filter: ele também percorre o array e guarda no array de retorno 
o valor correspondente a uma condição
retorna todos os valores do array que sejam divisiveis por 3
*/

let numerosdiv3 = numeros.filter(function(numeros){
    return numeros % 3 === 0
})
document.write(`${numerosdiv3} <p>`)


/*Find -> percorre a lista e para, assim que encontra um numero que 
condiz com a condição pré definida */

let primeiroPar = numeros.find(function(numeros){
    return numero % 2 === 0
})
document.write(`${primeiroPar}`)

