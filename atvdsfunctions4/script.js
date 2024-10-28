let pc = {
    modelo:"",
    cpu:"",
    ram:"",
    hd:""
}
function preencherD(){
    pc.modelo = prompt("Insira o modelo do computador: ");
    pc.cpu = prompt("Insira o processador: ");
    pc.ram = prompt("Insira a memória ram: ");
    pc.hd = prompt("Insira o HD: ");
}
function imprimeD(){
    console.log("Modelo: " + pc.modelo);
    console.log("Processador: " + pc.cpu);
    console.log("Memória Ram: " + pc.ram);
    console.log("HD: " + pc.hd);
}
function attpc(){
    let escolha = prompt("Qual componente deseja modificar?");
    if(pc.hasOwnProperty(escolha)){//dica do chat gpt
      pc[escolha] = prompt(`Insira os novos dados para ${escolha}`);
    console.log(`${escolha} foi atualizada:`)
    }else{
        console.log("Escolha inválida.")
    }
}
preencherD();
imprimeD();
attpc();
imprimeD();