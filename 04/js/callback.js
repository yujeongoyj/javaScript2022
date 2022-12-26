function showData(name, age) {
  alert(`${name}님, 나이가 ${age}이시군요`);
}

function getData(callback) {
  let userName = prompt("이름을 입력하시오");
  let userAge = prompt("나이를 입력하시오");
  callback(userName, userAge);
}

getData(showData)