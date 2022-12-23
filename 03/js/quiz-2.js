let number = prompt("1보다 큰 숫자를 입력하시오");
let sum=0;


if(number !==null && number>1){
  for(let i =1; i<=number; i++){
    if(i%2==1){
    continue;
    }
    sum +=i;
    document.write(`${i} ----- ${sum}<br>`)
  }
}