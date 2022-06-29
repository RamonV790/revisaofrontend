//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para mostrar o estado no git bash");
  if ((nome == "git status")) {
    alert("O" + nome + ", serve para iniciar o git.Parabéns você acertou!");}
    else  {
      alert("O" + nome + ", serve para iniciar o git. Você Errou!");}
  window.location="aula3.html";
}
