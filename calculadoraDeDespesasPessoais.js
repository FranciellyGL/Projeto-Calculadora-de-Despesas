// Calculadora de Despesas Pessoais

let menu = "";
let despesas = []
let somatotal = 0;


do {
  menu =(prompt(
        "Menu:\n" +
    "1 - Cadastrar nova despesa\n" +    //  \n (quebra de linha)
    "2 - Ver resumo\n" +
    "3 - Limpar despesas\n" +
    "4 - Sair"
   ));

   switch(menu){
    case "1":
        const tipo = prompt("Digite o tipo da despesa (Alimentação, Transporte, Energia, Água):"); 
        const valor = Number(prompt("Digite o valor da despesa:"));
        
        
        if ( valor > 0) {
            const despesa = [ tipo, valor ];
            despesas.push(despesa);
            alert("Despesa cadastrada com sucesso!");
         
            for (let i = 0; i < despesas.length; i++) {
                 console.log("Despesa tal " + despesas[i][0] +  " gasto tal " + despesas[i][1]);   
            }
            
        
    } else {
        alert("Valor inválido! Por favor, insira um valor positivo.");
    }
   
        break

    case "2":
       
        if (despesas.length === 0) {
            alert("Nenhuma despesa cadastrada.");
      } else {
            console.log(despesas[0][0], despesas[0][1])
        somatotal = 0;
       
        for (let i = 0; i < despesas.length; i++) {  // desc quantidade
         
          somatotal += despesas[i][1];
        }
   
            console.log("O valor total das despesas é R$:", somatotal.toFixed(2));

        const media = somatotal / despesas.length;

            console.log("Valor médio gasto é R$:", media.toFixed(2));  // duas casas decimais
}
      break;

    case "3":
        despesas = [];
            console.log("Despesas limpas");
		
      break

    case "4":
   
    alert("Saindo do programa.");
    break;

    default:
        alert("Opção inválida! Escolha uma opção entre 1 e 4.");
     break

}  
} while (menu !== "4");




