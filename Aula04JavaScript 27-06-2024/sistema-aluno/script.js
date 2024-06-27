const button = document.querySelector("button");
const inputNota = document.querySelector("#nota")

//Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputNota.value);

    if (inputNota.value >= 6 ){
        alert("Você está Aprovado");
    } else(inputNota.value <= 5); {
        alert("Você está Reprovado")
    
    }});