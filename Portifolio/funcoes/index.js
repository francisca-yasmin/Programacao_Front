/*
funções: eh um bloco de codigo que tem como preocupação a reutilização deste.
a ideia principal, eh fazer valer a modularidade e a simplicidade das caracteristicas de um algoritmo.
++++++
function NomeFuncao (atributos){script/corpo da função que sera usado}
cleanCode -> codigo limpo - não repetir codigos, as varriaveis e funções devem ter nomes
apropriados para o uso
[2] os espaçamentos devem seguir as boas praticas
[3] trazer a doc necessaria pa a facil manutenção
*/

function saudar(){
    alert("oi, lindo dia para nós!")
    alert("galera, energias mega posistivas para lindo lindo")
}

//SOMA DE VALORES
function soma(a,b){
    //console.log -> print para o programador
    //console.log(a)
    return a + b;
}

function somarVarios(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d
}

//convete o texto para letras maiusculas
function converterMaisculo(frase){
    return frase.toUpperCase();
}

//para saber quantidade de caractere em um texto
function qtdCaractere(frase){
    return frase.length;
}

function limparEspacos(frase){
    return frase.trim();
}

//para fazer uma função ser executada temos que chama-la
saudar()

//chamando minha função e exibindo o resultado na tela
let resultado = soma(10,20)
document.write(resultado)

//função chamar varios
//caso o usuario não entre com todos os valores necessarios -> NaN
let result = somarVarios(10, 20, 30, 40)
document.write(`<p> Soma dos valores são: ${result}`)

//chamar a função de converter as caracteres
let frase = prompt("informe uma frase")
let textoConvertido = converterMaisculo(frase)
document.write(`<p> ${textoConvertido}`)

//contar caractere
let contarCaractere = qtdCaractere(frase)
document.write(`<p> Quantidade de caractere da frase eh: ${contarCaractere}`)

//limpar os espaços
let limpo = limparEspacos(frase)
document.write(`<p> texto limpo e sem espaços:  ${limpo}`)

let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color = 'purple';

let corpo = window.document.body;
corpo.style.backgroundColor = 'beige';

function mudarCor(){
    let div = document.getElementById("minha-div");
    if(div.style.backgroundColor == "purple"){
        div.style.backgroundColor = "green"
    }else{
        div.style.backgroundColor = "purple"
    }
}