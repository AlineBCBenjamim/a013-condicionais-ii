const nome = prompt("Digite o seu nome:");
const idade = Number(prompt("Digite sua idade:"));

nome === 'José' ? console.log("Oi, Zé!") : console.log("Olá," +nome);

idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista"); 
