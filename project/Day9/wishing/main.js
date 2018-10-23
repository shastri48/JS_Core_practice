var nameText = document.querySelector(".nameText");
var namePrint = document.querySelector(".name");
var button = document.querySelector("button");
var h2 = document.createElement("h2");
function addWish() { 
  if(!nameText.value) return;
  // namePrint.textContent = nameText.value;
  h2.innerText = nameText.value;
  namePrint.prepend(h2);
}
function windowWish(e) {
  if(e.keyCode == 13){
    addWish();
  }
}
button.addEventListener("click", addWish);
window.addEventListener("keypress", windowWish);