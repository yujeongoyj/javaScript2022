const viewBttn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBttn.onclick =()=> {
  detail.classList.toggle("hidden");
}