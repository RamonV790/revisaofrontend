//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");
var ct= 0;



button.onclick = function () {
  var nome = prompt("Qual é o comando para enviar um repositório local para o repositório remoto?");
  if ((nome == "git push <link>")) {
    alert("O comando git push é usado para enviar o conteúdo do repositório local para um repositório remoto. O comando push transfere commits do repositório local a um repositório remoto. Parabéns você acertou!");
    window.location="aula7.html";}
    else  {
      ct ++;
      alert(" Você Errou!");
    
      if (ct==3){
        alert("Que pena você perdeu!");
        window.location = "aula1.html";
      }
      else {
        alert("Você errou, tem mais "+(3-ct)+" Chances");
       }
      
    
    
    }
  window.location="aula7.html";
}
