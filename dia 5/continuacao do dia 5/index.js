//criando varieavel 
let valor 
let quantidade
let opcao = prompt( "bem vindo ao Le-thru voce deseja: " +
"\n1 - abastecer com gasilina;  \n2 - abastecer com alcool; \n3 - calibrar os pneus ")

// criando swithcase 
switch (opcao) {
   case "1":
      valor = parseInt (prompt("Digite o valor para abastecer"))
      quantidade = valor / 5
      console.log("Foram abastecido " + quantidade + "L de gasolina")
      break;
   case "2":
      valor = parseInt(prompt("Digite o valor desejado para abastecer"))
      quantidade = valor /3 
      console.log("foram abastecidos " + quantidade + "L de alcool")
      break;
   default:
      console.log("Pneus calibrados com sucesso")
   break;

   }


    