//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para baixar um repositório remoto?");
  if ((nome == "git pull <link>")) {
    alert("O " + nome + ", serve para baixar um repositório remoto no git Bash. Parabéns você acertou!");
    window.location="aula6.html";}
    else  {
      alert("O" + nome + ", serve para baixar um repositório remoto no git Bash. Você Errou!");}
  window.location="aula6.html";
}
