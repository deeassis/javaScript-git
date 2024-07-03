// Obtém o botão e a imagem do DOM
const btnMoverImagem = document.getElementById("btnMoverImagem");
let imagem = document.getElementById("Imagem");

// variavel para rastrear o estado atual da posição da imagem 
let isMoved = false;

//adiciona um evento clique
btnMoverImagem.addEventListener("click", function() {
   if(isMoved){
    imagem.style.left = "0";
   }else{ 
    imagem.style.left="500px";
   }

   isMoved = !isMoved;
});
