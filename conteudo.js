// alert e console.log:
// Escreva um programa que utilize alert para exibir uma mensagem de boas-vindas ao usuário.
// Utilize console.log para exibir uma mensagem informando o nome do seu personagem favorito de um livro/filme/série.

// Exemplo com alert
alert("Bem-vindo ao nosso site!");
 
// Exemplo com console.log
console.log("Meu personagem favorito é Harry Potter.");

// Confirmação (confirm):
// Crie um programa que solicite ao usuário que confirme se deseja sair da página atual.

var confirmacao = confirm("Tem certeza que deseja sair desta página?");
if (confirmacao) {
    console.log("O usuário confirmou que deseja sair.");
} else {
    console.log("O usuário optou por permanecer na página.");
}

// if, if-else, else-if:
// Escreva um programa que verifique se um número digitado pelo usuário é positivo, negativo ou zero.

var numero = parseInt(prompt("Digite um número:"));
 
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// switch-case:
// Crie um programa que solicite um dia da semana e exiba uma mensagem correspondente.

var dia = "diaEscolhido";
switch (dia) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("Dia de trabalho!");
        break;
    case "sábado":
    case "domingo":
        console.log("Dia de descanso!");
        break;
    default:
        console.log("Dia inválido!");
}

// while:
// Escreva um programa que exiba os números de 1 a 10 utilizando um loop while.

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// do-while:
// Crie um programa que solicite ao usuário um número entre 1 e 10, repetindo até que o número esteja dentro do intervalo válido.

var numero;
do {
    numero = parseInt(prompt("Digite um número entre 1 e 10:"));
} while (numero < 1 || numero > 10);
 
console.log("Número válido: " + numero);

// for:
// Faça um programa que exiba os números pares de 0 a 20 utilizando um loop for.

for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

Espero que esses exercícios ajudem a consolidar o seu conhecimento em JavaScript!