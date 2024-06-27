let hours = 10;
const isbomDia = hours >= 6 && hours <= 11
const isboaTarde = hours >= 12 && hours <= 17

if (isbomDia){
console.log("Bom dia!!")
} else if (isboaTarde){
console.log("Boa tarde")
}else{
    console.log("Boa noite")
}