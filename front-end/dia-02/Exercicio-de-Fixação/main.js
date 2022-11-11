// Nova Promisse

/* new Promise((resolve, reject) => {}); */

//Quando a promise for resolvida, usamos a função resolve;
//Quando a promise for rejeitada, usamos a função reject.

// função que gera um número aleatório
/* const numberAlet = () => Math.round(Math.random() * 30); */

/*const resolve = () => (resolve, reject) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = numberAlet;
      resolve(randomNumber);
    }, 2000);
  }); */

//Dessa forma, quando a promise resolvedPromise for chamada, ela será finalizada com o estado de resolvida, retornando o número gerado.


/* const rejectPromisses = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const newRandonRejected = numberAlet();
      reject(new Error(`O número ${newRandonRejected} é inválido`))
    }, 1000);
  })

console.log(rejectPromisses()) */

