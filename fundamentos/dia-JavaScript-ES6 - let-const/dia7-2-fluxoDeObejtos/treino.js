//Throw e Try/Catch
/* 
const sums = (value1, value2) => value1 + value2;
console.log(sums(2,3));

// Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3')); */

// Sintaxe

// new operator

// O operador new cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos (built-in) que possuem uma função construtora.

//new construtor[([argumentos])]
//

//Aula ao vivo do Rods
const hq1 = {
  name: 'Batman',
  date: 'Batman: The killing Joke',
  year: '1988',
};

console.log(hq1.date);

const meuArray = [];
 for(let key in hq1){
  meuArray.push(key);
 }

 console.log(meuArray);

 //Colocar as chaves dentro de um array

 const meuArray2 = Object.keys(hq1)
  console.log(meuArray2)

  // Quero verificar se existe uma chave dentro de uma array
  
 // console.log(meuArray2.includes('name'))
 // console.log(meuArray2.includes('year'))

  //colocar os valores do bjeto dentro de array

  const meuArray3 = Object.values(hq1);

  //Colocar entradas do objeto dentro de array
  
  const meuArray4 = Object.entries(hq1);


  console.log(Array.isArray(hq1));



  //Object.assign

  const hq2 = {
    name:'Wonder Woman',
    title1:'jose',
    year:'Deus'
  }
  const name1 = {
    name1s:'Wonder Woman',
  }
  const name2 = {
    name1s:'Wonder'
  }


  // Copiando o objeto 

  const copyObject = Object.assign(hq2, name1, name2);

  copyObject.novaChave = 'Novo Valor'
  /* console.log(hq2);
  console.log(copyObject); */

  
  
  // Object.values

  const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  
  /* for (const property in coolestTvShow) {
    console.log(`Propriedade: ${coolestTvShow[property]}`);
  } */
  
  // Object.keys

 /*  for (const keys in coolestTvShow) {
    console.log(`Chave: ${keys}`);
  } */

  
  
  // Object.entries

  const entries = {
    nome: 'Anderson',
    cidade: 'Brasília',
    idade: 17
  };
  let result = 0
  const minha  = (Object.entries(entries));
  for (let i = 0; i < minha.length; i++) {
     result += i
  }
  return console.log(result);

 /*  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  const coolestTvSho = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  }; */
  
/*   console.log(Object.entries(coolestTvSho));

  var map = new Map(Object.entries(coolestTvSho));
  console.log(map) */

  //var map = new Map(Object.entries(coolestTvShow));
  //console.log(map)