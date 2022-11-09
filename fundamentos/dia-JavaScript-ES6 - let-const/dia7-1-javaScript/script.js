/* const userInfo = {
  name: 'Cláudio',
  id: '5489-2',xz
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(` Pessoal 1: Nome: ${userInfo.name}\n Id : ${userInfo.id}\n Email: ${userInfo.email}`) */

// ARROW FUNCTIONS COM OPERADORES DE

const somar = (Number1, number2) => Number1 + number2;
console.log(somar(5, 5));

const subtrair = (a, b) => a - b;
console.log(subtrair(5, 10));

const multiplicar = (c, d) => c * d;
console.log(multiplicar(5, 5));

const divisao = (e, f) => e / f;
console.log(divisao(30, 5));

function contarPalavra(frase) {
  return frase.split("").length;
}
console.log(contarPalavra("Fala tribo, Beleza?"));

const contar = (frase) => frase.split("").length;
console.log(contar("Eu souu anderson "));

// Criando objetos coom function e arrow function

function pes(nome, idade) {
  return {
    nome: nome,
    idade: idade,
  };
}
console.log(pes("Anderson", 30));

const pess = (nome, idade) => ({ nome: nome, idade: idade });
console.log(pess("jose", 30));

const jogador2 = (nome, idade, time) => ({
  Nome: nome,
  Idade: idade,
  Time: time,
});

console.log(jogador2("João", 20, "Flamengo"));

function jogador3(nome, idade, time) {
  return {
    Nome: nome,
    Idade: idade,
    Time: time,
  };
}
console.log(jogador3("Joaquim", 20, "Palmeiras"));

// CRIANDO OPERATOR TERNARY COM ARROW FUNCTIONS E FUNCTION

// A sintaxe básica do operador ternário é muito simples:
//`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = 1 + 1 === 2 ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = 2 + 2 === 3 ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

/* Como você pode ver, a sintaxe do operador ternário é bem simples: x ? y : z.

O x é uma condição que será avaliada como verdadeira ou falsa;
O y é o retorno se a condição for verdadeira;
O z é o retorno se a condição for falsa. */

/* gerando três ou mais resultados possíveis, o mais simples será utilizar as opções já aprendidas anteriormente: */

//-----------------------------------------------------------

let idade = 16;

/* if (idade >= 18) {
  console.log(`Parabéns você pode dirigir`);
} else {
  console.log(`Você não pode dirigir`);
}
 */
let verificar = idade >= 18 ? `Pode Dirigir` : `Não Pode dirigir`;
console.log(verificar);

//-----------------------------------------------------------

//Somando com Arrow Function

const sum = (number1, number2) => `Olá, ${number2 + number1}`;
console.log(sum(5, 5));

//Crie uma função que receba um número e retorne seu fatorial.

const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  console.log(`Esse é o fatorial ${result}`);
};
factorial(6);

//Exercício 2 => Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

const longestWord = (FrasM) => {
  let maior = FrasM.split(" ");
  let maiorLetra = 0;
  
  for (let index = 0; index < maior.length; index++) {
    if (maior[index].length > maiorLetra) {
      maiorLetra = maior[index].length;
    }
  }
  console.log(maiorLetra);
};

longestWord("Antônio foi ao banheiro e não sabemos o que aconteceu");


