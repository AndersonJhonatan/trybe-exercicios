/* // VARIAVEL QUE FIZ A QUE PEGUEI
// VARIAVEL QUE FIZ A QUE PEGUEI  ====== DATA.AUTHOR;
// VARAIVEL DO ERRO QUE TAMBEM BUSQUEI;
const cep = '30130-010'
const button1 = document.querySelector(".button1");
const testH1 = document.querySelector(".TestH1");
const API_URL = `https://viacep.com.br/ws/${cep}/json/`;

button1.addEventListener("click", async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // VARIAVEL QUE FIZ A BUSCA LA EM CIMA.INNERTEXT OU INNERHTML = DATA.QUOTE;
    // VARIAVEL QUE FIZ A BUSCA LÁ EM CIMA.INNERTEXT OU INNERHTML = DATA.AUTHOR;
    // VARAIVEL DO ERRO QUE TAMBEM BUSQUEI LA EM CIMA.INNERTEXT OU INNERHTML = "";
  } catch (error) {
    // VARIAVEL QUE FIZ A BUSCA LA EM CIMA.innerhtml = ""
    // VARIAVEL QUE FIZ A BUSCA LA EM CIMA.innerhtml = ""
    // RAIVEL DO ERRO.innerText = " Error  getting quote: ${error.message}"
  }
}); */
