const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", () => {
  imgBox.src = "images/pic-6.jpg";
});
imgBox.addEventListener("mouseout",()=>{
  imgBox.src="images/pic-1.jpg";
});