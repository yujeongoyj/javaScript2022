function changeBg() {
  const bgConut =5;

  let randomNumber = Math.floor(Math.random() * bgConut)+1;
  document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;

}
document.addEventListener("load", changeBg());

// window.onload = function () {
//   const bgCount = 5;

//   let randomNumber = Math.floor(Math.random() * bgCount) + 1;
//   document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
// };
