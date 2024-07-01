const nomes = ["Denise", "Ana", "Bruna"];

let html = ''; // Inicia a lista não ordenada

for (let i = 0; i < nomes.length; i++) {
    html += `<li>${nomes[i]}</li>`; // Adiciona cada nome como um <li> na string html
}

console.log(html);