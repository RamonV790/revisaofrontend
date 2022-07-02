//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");
var ct= 0;



button.onclick = function () {
  var nome = prompt("Qual é o comando para baixar um repositório remoto?");
  if ((nome == "git pull <link>")) {
    alert("O comando git pull é usado para buscar e baixar conteúdo de repositórios remotos e fazer a atualização imediata ao repositório local para que os conteúdos sejam iguais. Parabéns você acertou!");
    window.location="aula6.html";}
    else  {
      ct ++;
      alert("Você errou, vamos lá tente novamente!");
    
      if (ct==3){
        alert("Que pena você perdeu!");
        window.location = "aula1.html";
      }
      else {
        alert("Você errou, tem mais "+(3-ct)+" Chances");
       }
      
    
    
    }
  window.location="aula6.html";
}
