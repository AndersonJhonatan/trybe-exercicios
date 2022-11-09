import validator from "validator";

const inputTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const  option = document.querySelector('#option');
const answer = document.querySelector('#answer');

button.addEventListener('click', (event) => {
event.preventDefault();
})

const campos = {
  cpf: validator.isTaxID(inputTexto.value, 'pt-BR'),
  hexColor: validator.isHexColor(inputTexto.value),
  email: validator.isEmail(inputTexto.value),
  uuid: validator.isUUID(inputTexto.value, 4),
  url: validator.isURL(inputTexto.value),
};

answer.innerHTML = `A validação retornou ${campos[option.value]}`;