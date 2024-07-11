const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

//criando elemneto P
const pMensagem = document.createElement('p');

//adicionar evento de clique no botão salvar

salvarBtn.addEventListener("click", function(){
    const valor = campo.value;
    
    //validação
    if(valor.trim() === '' ){
        //alert("campo obrigatorio");
        pMensagem.textContent = "Campo Obrigatório";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");

        return;

    }

    //salvar no LocalStorage
    const chave = `valorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor);


    // limpar campo após salvar 
    campo.value = "";

    //exibir os valores salvos
    carregarValoresSalvos();
});