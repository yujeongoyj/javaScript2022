const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const bttn = document.querySelector("#bttn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");



const today = new Date();
current.innerText = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일
${today.getHours()}시 ${today.getMinutes()}분 현재`;

bttn.addEventListener("click",()=> {
  const birthday = new Date(birthYear.ariaValueMax, birthMonth.value-1, birthDate.value);
   let passed = today.getTime()-birthday.getTime();
   let passedDays = Math.floor(passed / (1000 * 60 * 60 * 24)); //
	 let passedHours = Math.floor(passed / (1000 * 60 * 60));   

   resultDays.innerText = '날짜로는 ${passedDays} 일이 흐르고';
   resultHours.innerText = '시간으로는 ${passedHours}시간이 흘렀습니다';

   birthYear.value="";
   birthMobth.value="";
   birthDate.value="";

});

