const idade = 5;

const gratis = idade >= 65 || idade <= 7
const pagante = idade > 7 && idade < 65

if (gratis) {
    console.log("Para você, a entrada é grátis!!")
} else if (pagante) {
    console.log("A entrada é R$ 30,00")
} else {
    console.log("inválido")
}

