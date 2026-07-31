//CARTÃO DE VISITA

let nome = prompt("Digite seu nome:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite o nome da empresa ou escola:");
let email = prompt("Digite seu e-mail:");

nome = nome.toUpperCase();


console.log("      CARTÃO DE VISITA");
console.log("Nome: " + nome);
console.log("Cargo: " + cargo);
console.log("Empresa/Escola: " + empresa);
console.log("E-mail: " + email);


alert("Cartão de visita gerado com sucesso!");



//CALCULADORA DE DESCONTO


let produto = prompt("Digite o nome do produto:");
let preco = Number(prompt("Digite o preço original:"));
let desconto = Number(prompt("Digite o percentual de desconto:"));

let valorDesconto = preco * (desconto / 100);
let precoFinal = preco - valorDesconto;

console.log(" ");
console.log("CALCULADORA DE DESCONTO");
console.log("Produto: " + produto);
console.log("Preço Original: R$ " + preco.toFixed(2));
console.log("Valor do Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));

alert(
"Produto: " + produto +
"\nPreço Original: R$ " + preco.toFixed(2) +
"\nDesconto: R$ " + valorDesconto.toFixed(2) +
"\nPreço Final: R$ " + precoFinal.toFixed(2)
);

//VERIFICADOR DE SENHA

let senha = prompt("Digite uma senha:");

let possuiMaiuscula = /[A-Z]/.test(senha);
let possuiMinuscula = /[a-z]/.test(senha);

let classificacao;

if (senha.length < 6) {
    classificacao = "Fraca";
} else if (senha.length >= 6 && senha.length < 10 && possuiMaiuscula && possuiMinuscula) {
    classificacao = "Média";
} else if (senha.length >= 10 && possuiMaiuscula && possuiMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

console.log(" ");
console.log("VERIFICADOR DE SENHA");
console.log("Quantidade de caracteres: " + senha.length);
console.log("Classificação: " + classificacao);

alert("Classificação da senha: " + classificacao);z