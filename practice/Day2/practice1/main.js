var button = document.querySelector("button");
function once() {
  console.log("great job done");
  button.remove("click" , once);
  // button.removeEventListener("click", once);
}
button.addEventListener("click", once);