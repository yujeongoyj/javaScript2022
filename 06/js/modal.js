const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListner("click", ()=> {
  modalBox.classList.toggle("active");
});