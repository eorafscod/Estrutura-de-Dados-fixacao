const readlineSync = require('readline-sync');

let maioresIdade = 0;
let menoresIdade = 0;

for (let i = 1; i <= 10; i++) {
  const idade = parseInt(readlineSync.question(`Digite a idade da ${i}ª pessoa: `));

  if (idade >= 18) {
    maioresIdade++;
  } else {
    menoresIdade++;
  }
}

console.log(`Maiores de idade: ${maioresIdade}`);
console.log(`Menores de idade: ${menoresIdade}`);
