//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

*/

var button = document.querySelector("button");
var ct= 0;


button.onclick = function () {
  var nome = prompt("Qual é o comando para criar um diretório no git Bash");
  if ((nome == "mkdir")) {
    alert("O " + nome + ",Cria um diretório ou subdiretório. Extensões de comando, que são habilitadas por padrão, permitem que você use um único comando mkdir para criar diretórios intermediários em um caminho especificado. Parabéns você acertou!");
    window.location="aula5.html";}
    else  {
      ct ++;
      alert("O" + nome + ", serve para criar um diretório no git Bash. Você Errou!");
    
      if (ct==3){
        alert("Que pena você perdeu!");
        window.location = "aula1.html";
      }
      else {
        alert("Você errou, tem mais "+(3-ct)+" Chances");
       }
      
    
    
    }
  
}
