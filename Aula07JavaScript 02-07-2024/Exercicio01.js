// 1 para Água, 2 para Refrigerante, 3 para Suco
 const drinkType = 'chá';


switch (drinkType) {
    case 'Água' :
        console.log("Substância química cujas moleculas são formadas por dois átomos de higrogenio e um de oxigênio");

        break;

    case 'Refrigerante':
        console.log("Bebida  não alcoólica e não fermentada, fabricada industrialmente, á base de água mineral e açúcar.");
        break;

    case 'Suco':
        console.log("Bebida produzida do líquido extraído de frutos");
        break;

    default:
        console.log("Bebida desconhecida");
        break;
}