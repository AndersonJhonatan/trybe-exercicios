import { nanoid } from "nanoid"
import andSave from 'clipboard-copy'
import "./style.css"

const paword = document.querySelector("button");
const getDisPaword = document.querySelector("h2");

paword.addEventListener("click", () => {
  const randomPassword = nanoid();
  getDisPaword.innerHTML = randomPassword;
});


getDisPaword.addEventListener('click', async (event) => {
  await andSave(event.target.innerHTML);
  alert (`Senha copiada com Sucesso`)
})