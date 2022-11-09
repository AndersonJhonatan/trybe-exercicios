    // SELETORES
    const iNPUT_TEXT = document.querySelector("#input-text");
    const iNPUT_CHECKBOX = document.querySelector("#input-checkbox");
    const hREF_LINK = document.querySelector("#href");

function getclick(event) {
    event.preventDefault();
    iNPUT_TEXT.innerHTML = iNPUT_TEXT.value
    console.log(iNPUT_TEXT.value);
    
}
hREF_LINK.addEventListener("click", getclick)