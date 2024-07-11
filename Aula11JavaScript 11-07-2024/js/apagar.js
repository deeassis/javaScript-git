const apagarBtn = document.querySelector("#apagar");

apagarBtn.addEventListener("click", () => {
  //limpa todos os valores
localStorage.clear();

//limpa lista de interface
listaValores.innerHTML = "";
});
