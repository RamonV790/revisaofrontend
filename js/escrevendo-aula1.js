//o que é uma variável?
/*
  A variável é um espaço reservado na memória
  do computador.
  Vamos declarar variáveis no JavaScript?

  */

 // for (ct = 0; ct < 5; ct++) {
  var button = document.querySelector("button");
  var ct = 0;
 
 
  //alert(ct + "sesds");
  button.onclick  = function () {
    var nome = prompt("Qual é o comando para iniciar o git?");
    
    if ((nome == "git init")) {
      alert("O " + nome + ", O comando git init cria um novo repositório do Git. Ele pode ser usado para converter um projeto existente e não versionado em um repositório do Git ou inicializar um novo repositório vazio. Parabéns você acertou!");
      window.location = "aula2.html";
    }
  
   else {
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
  


