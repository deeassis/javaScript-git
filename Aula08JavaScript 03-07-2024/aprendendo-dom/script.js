// obtém o elemento DOM com o ID 'idNome'
let nome = document.getElementById("idNome")
let cidade = document.getElementById("idCidade")

function mudar(event){
// previne o comportamento padrão do evento, como o envio de um formulario

event.preventDefault();
document.getElementById("titulo").innerHTML = nome.value;
document.getElementById("cidadetext").innerHTML = cidade.value;

nome.value = '';
cidade.value = '';
}



