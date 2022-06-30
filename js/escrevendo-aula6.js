//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para enviar um repositório local para o repositório remoto?");
  if ((nome == "git push <link>")) {
    alert("O " + nome + ", serve para enviar um repositório local para um remoto no git Bash. Parabéns você acertou!");
    window.location="aula7.html";}
    else  {
      alert("O" + nome + ", serve para enviar um repositório local para um remoto no git Bash. Você Errou!");}
  window.location="aula7.html";
}
