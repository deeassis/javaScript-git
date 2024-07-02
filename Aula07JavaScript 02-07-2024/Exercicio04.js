const animals = ["macaco", "tucano", "elefante", "pavão", "hipopotamo", "leão"];

if (animals.includes("Leão")) {
    console.log('Leão não existe no array ');
} else if (animals.includes("leão")){
    console.log('Existe um leão no array animals.');
}

