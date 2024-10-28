function calcMedia(v1, v2, v3){
    let soma = v1 + v2 + v3;
    let media = soma / 3;
    return media;
}
function leValor(){
    let valor = parseFloat(prompt("Digite numero: "))
    return valor;
}let v1 = leValor();
let v2 = leValor();
let v3 = leValor();
console.log("A média é: " +  calcMedia(v1, v2, v3))