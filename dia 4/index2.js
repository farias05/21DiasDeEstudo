let nomeUsuario = prompt("Digite seu Nome")
let idade = Number(prompt("Digite sua idade"))
let carteira = prompt("voce tem carteira?")
let carro = prompt("voce tem carro?")

if (idade < 18 && carteira == "nao") {
    console.log(nomeUsuario + " voce nao pode dirigir ")

} else if (idade >= 18 && carteira == "sim" && carro == "nao") {
    console.log(nomeUsuario + " voce pode dirigir mais nao tem carro ou carta ")

} else if (idade >= 18 && carteira == "sim" && carro == "sim") {
    console.log(nomeUsuario + " voce pode dirigir ")
}

