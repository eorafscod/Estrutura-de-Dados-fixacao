const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');
const idade = parseInt(prompt('Digite sua idade: '));
const peso = parseFloat(prompt('Digite seu peso (em kg): '));

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Peso:', peso);
