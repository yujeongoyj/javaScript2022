const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e)=> {
  e.preventDefault(); // 버튼을 클릭해도 서버로 보내지 않도록
  const item = document.createElement("li");
  item.innerHTML = 
  `${title.value} - ${author.value}
  <span class="delButton">삭제</span>`;
  bookList.appendChild(item);

  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll(".delButton");
  for(let delButton of delButtons){
    delButton.addEventListener("click", function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }


});