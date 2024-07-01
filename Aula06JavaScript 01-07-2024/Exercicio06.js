const number = ['91', '5', '30', '97', '83', '31'];
let i = 0;

// Loop externo para percorrer cada array dentro do array 'arrays'
for (let i = 0; i < number.length; i++) {
    // Loop interno para percorrer cada elemento dentro do array atual (arrays[i])
    for (let j = 0; j < number[i].length; j++) {
        soma += number[i][j];  // Somando cada elemento ao valor de soma
        console.log(soma); 

console.log(typeof number);

console.log(typeof Number (number));}}