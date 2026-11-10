let tela = document.querySelector("#tela-de-pintura")/*é um caminho do JS para buscar um elemento dento do seu HTML...utilizando as mesmas regra de seleção que usamos no CSS. */
let corRoxo = document.querySelector("#pincel-roxo");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corVerde = document.querySelector("#pincel-verde");
let corAzul = document.querySelector("#pincel-azul");
let corVermelho = document.querySelector("#pincel-vermelho");
let corRosa = document.querySelector("#pincel-rosa");
let corLaranja = document.querySelector("#pincel-laranja");
let corMarrom = document.querySelector("#pincel-marrom");
let corPreto = document.querySelector("#pincel-preto");

corRoxo.addEventListener("click", roxo);
corAmarelo.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corAzul.addEventListener("click", azul);
corVermelho.addEventListener("click", vermelho);
corRosa.addEventListener("click", rosa);
corLaranja.addEventListener("click", laranja);
corMarrom.addEventListener("click", marrom);
corPreto.addEventListener("click", preto);
let nomeCor = document.querySelector("h3");

function  roxo() {
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo";/*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteúdo de uma tag*/
} 
function amarelo(){
    tela.style.background = "yellow";
    nomeCor.innerHTML = "amarelo";
}
function verde(){
    tela.style.background = " green";
    nomeCor.innerHTML = " verde";
}
function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "azul";
}
function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = " vermelho";
}
function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "rosa";
}
function laranja(){
    tela.style.background = " orange";
    nomeCor.innerHTML = " laranja";
}
function marrom(){
    tela.style.background = "brown";
    nomeCor.innerHTML = "marrom";
}
function preto(){
    tela.style.background = " black";
    nomeCor.innerHTML = "preto";
}