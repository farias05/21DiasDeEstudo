let fome = prompt('você esta com fome?') 
let dinheiro = prompt("voce tem dinheiro?")
let restaurante = prompt ("o restaurante esta aberto?")

/// 
if (fome == "nao" || dinheiro =='nao'){console.log ('hoje a janta sera em casa')}

if (fome == "sim" && dinheiro == "sim" && restaurante == "nao") {console.log('peça um delivery')}     

if (fome == "sim" && dinheiro == "sim" && restaurante == "sim") {console.log("o seu jantar sera no seu restaurante preferido")}


