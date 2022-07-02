//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");
var ct =0;



button.onclick = function () {
  var nome = prompt("Qual é o comando para mostrar o estado no git bash");
  if ((nome == "git status")) {
    alert("O comando git status exibe as condições do diretório de trabalho e da área de staging. Ele permite que você veja quais alterações foram despreparadas, quais não foram e quais arquivos não estão sendo monitorados pelo Git. Parabéns você acertou!");
    window.location="aula3.html";}
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
      



}
