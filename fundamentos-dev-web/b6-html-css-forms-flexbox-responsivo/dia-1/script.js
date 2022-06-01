// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function pD(event) {
  event.preventDefault();
}
//1
HREF_LINK.addEventListener('click', pD);

//2
INPUT_CHECKBOX.addEventListener('click', pD);

//3
INPUT_TEXT.addEventListener('keypress', pD);