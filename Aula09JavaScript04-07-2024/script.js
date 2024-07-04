// Obtém os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// Botões
let btnSomar = document.getElementById("btnSomar");
let btnSubtrair = document.getElementById("btnSubtrair");
let btnDividir = document.getElementById("btnDividir");
let btnMultiplicar = document.getElementById("btnMultiplicar");

// Botão resultado
const resultado = document.getElementById("resultado");

// Adiciona um evento de clique no botão 'Somar'
btnSomar.addEventListener("click", function () {
    resultado.textContent = ""; // Limpa o resultado anterior
    let soma = Number(valor1.value) + Number(valor2.value);
    resultado.textContent = soma;
    limparValores();
});

// Adiciona um evento de clique no botão 'Subtrair'
btnSubtrair.addEventListener("click", function () {
    resultado.textContent = ""; // Limpa o resultado anterior
    let subtrair = Number(valor1.value) - Number(valor2.value);
    resultado.textContent = subtrair;
    limparValores();
});

// Adiciona um evento de clique no botão 'Dividir'
btnDividir.addEventListener("click", function () {
    resultado.textContent = ""; // Limpa o resultado anterior
    let dividir = Number(valor1.value) / Number(valor2.value);
    resultado.textContent = dividir;
    limparValores();
});

// Adiciona um evento de clique no botão 'Multiplicar'
btnMultiplicar.addEventListener("click", function () {
    resultado.textContent = ""; // Limpa o resultado anterior
    let multiplicar = Number(valor1.value) * Number(valor2.value);
    resultado.textContent = multiplicar;
    limparValores();
});

// Função para limpar os valores dos campos de entrada
function limparValores() {
    valor1.value = "";
    valor2.value = "";
}

