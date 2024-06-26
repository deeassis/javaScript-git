let txt = "Estão chegando as provas";

console.log(txt.length);
//retorna a primeira posição na String
console.log(txt.indexOf("as"));
//Retorna a ultima posição na String
console.log(txt.lastIndexOf("as"));
//extrair parte da string
console.log(txt.slice(0, 5));
// Substituir uma substring (avaliações) na string (provas)
console.log(txt.replace("provas" , "avaliações"));
// Converter a string  para letras maiúsculas
console.log(txt.toUpperCase());
// Converter a string  para letras minúsculas
console.log(txt.toLowerCase());