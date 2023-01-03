const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderButton.addEventListener("click", ()=> {

  let newP = document.createElement("p");
  let textNode = document.createTextNode(title.innerText);
  newP.append(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color ="blue";
  orderInfo.append(newP);

  let newImg = document.createElement("img");
  let srcNode = document.createAttribute("src");
  srcNode.value = "images/wall.jpg";
  newImg.setAttributeNode(srcNode);
  document.body.appendChild(newImg);
  
},{once : true});//이벤트가 여러번 발생해도 이벤트리스너는 한번만 실행
