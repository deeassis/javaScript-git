let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList");

//obtém os valores dos campos de entrada 
let nome = document.querySelector("#nome");
let email =  document.querySelector("#email");
let cidade=  document.querySelector("#cidade");



//adiciona um evento de formulario
//submit
form.addEventListener("submit", function(event) {

//previne o comportamento padrão
event.preventDefault();


   // cria um novo item de lista com valores

   let listItem = document.createElement("li");
   listItem.innerHTML = `<strong>Nome:</strong> ${nome.value}<br><strong> Email: </strong> ${email.value}<br><strong> Cidade: </strong> ${cidade.value}`;

   //adiciona o novo item na lista 
cadastroList.appendChild(listItem);

//limpa os campos de entrada 
form.reset();

})

