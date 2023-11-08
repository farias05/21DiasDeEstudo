//criando variavel 
let n1 = Number(prompt ("Digite o primeiro numero"))
let n2 = Number(prompt ("Digite o segundo numero "))   

//criando switchcase 
let operacoes = prompt ("Qual operacao matematica voce deseja realizar? 1 para adicao, 2 subricao, 3 para multiplicacao, 4 para divisao")
 
switch (operacoes) {

    case   "1":
         resultado= n1 + n2 
        console.log(resultado) 
        break;
    case   "2": 
         resultado= n1 - n2
        console.log(resultado)
        break;
    case   "3":
         resultado = n1 * n2
        consolge.log(resultado)
        break;
    case   "4":
         resultado = n1 / n2
        console.log(resultado)
        break;
        

}
    





