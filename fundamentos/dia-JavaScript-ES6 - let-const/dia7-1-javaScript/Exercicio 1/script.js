let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';

const verificando = (escopo) => (escopo === true)? 

`${ifScope} 'ótimo, fui utilizada no escopo !';` : 'Não devo ser utilizada fora do meu escopo (else)';

console.log(verificando(true))


//-------------------------------------------------------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (a, b) => a - b

oddsAndEvens.sort(sortOddsAndEvens)

console.log(oddsAndEvens);

const numero  = [1 ,10 ,50 ,20 ,80 ,60 ,35 , 22]

const novaSort = (a, b) => a - b 

numero.sort(novaSort)

console.log(`Ordem crescente: ${ numero }`)

//-------------------------------------------------------