const bttn = document.querySelector("button"); //버튼 요소를 가져옴
function display() {
  alert("클릭했습니다");
}
bttn.addEventListener("Click", display); //버튼을 클릭하면 display함수 실행, 함수안에 display함수를
// 넣을떼 뒤에 소괄호를 넣지 않음