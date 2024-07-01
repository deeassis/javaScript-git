// Definição da variável 'tabuada' que representa o número base da tabuada
let tabuada = 4;

// Inicialização da variável 'i' que será usada como contador
let i = 1;

// Início do while loop: o loop continuará enquanto 'i' for menor ou igual a 10
while (i <= 10) {
    
    // Cálculo do resultado da multiplicação da tabuada pelo valor atual de 'i'
    let resultado = tabuada * i;
    
    // Exibição do resultado no console, utilizando interpolação de strings para formatar a saída
    console.log(`${tabuada} * ${i} = ${resultado}`);
    
    // Incremento do contador 'i' para passar para o próximo número da tabuada
    i++;
}