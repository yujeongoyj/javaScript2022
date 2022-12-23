let userNumber = prompt("숫자를 입력하시오");
if(userNumber !== null) {
  userNumber = parseInt(userNumber);
  if(userNumber%2 ===0){
    alert(`${userNumber}:짝수`);
  }else {
    alert(`${userNumber}:홀수`);
  }
}