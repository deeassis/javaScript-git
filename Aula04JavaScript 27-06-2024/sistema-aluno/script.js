const button = document.querySelector("button");
const inputNota = document.querySelector("#nota")

//Criando uma função para limpar o campo
function clearForm() {
    inputNota.value = "";
}

//Criando uma função
button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputNotaValue = inputNota.value
   

    //Validação de formulário
    if (inputNotaValue === '') {
        alert("Campo Obrigatório");
        return false;
    }

    if (inputNotaValue >= 6) {
        alert("Você está Aprovado");
    } else {
        alert("Você está Reprovado")
    }

    // chamando a função limpar campo
    clearForm();

});