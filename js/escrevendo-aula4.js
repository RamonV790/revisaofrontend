//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para criar um diretório no git Bash");
  if ((nome == "mkdir")) {
    alert("O " + nome + ", serve para criar um diretório no git Bash. Parabéns você acertou!");
    window.location="aula5.html";}
    else  {
      alert("O" + nome + ", serve para criar um diretório no git Bash. Você Errou!");}
  
}
