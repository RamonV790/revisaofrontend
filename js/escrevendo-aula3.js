//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para mostrar a versão do git");
  if ((nome == "git version")) {
    alert("O " + nome + ", serve para mostrar a versão do git Bash. Parabéns você acertou!");
    window.location="aula4.html";}
    else  {
      alert("O" + nome + ", serve para mostrar a versão do git Bash. Você Errou!");}
 
}
