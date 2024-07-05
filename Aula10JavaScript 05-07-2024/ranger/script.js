// Selecionando o elemento input range e o elemento onde vamos mostrar o valor
let range = document.getElementById('range');
let rangeValue = document.getElementById('rangeValue');


// Atualizando o valor exibido toda vez que o usuário move o controle deslizante
range.addEventListener('input', function() {
    rangeValue.innerHTML = this.value;
});
