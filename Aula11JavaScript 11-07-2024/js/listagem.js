const listaValores = document.querySelector("#listaValores");

//carregar valores ao iniciar a página
carregarValoresSalvos();

//função para carregar valores na lista
function carregarValoresSalvos() {
    listaValores.innerHTML = ""; //limpa lista antes de adc valores 

    for(let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        console.log(chave);

        if (chave.startsWith('valorSalvo')) { //filtra as chaves
            const valor = localStorage.getItem(chave);
            const listItem = document.createElement("li");
            listItem.textContent = valor;
            listaValores.appendChild(listItem);
            

        }

    }
}